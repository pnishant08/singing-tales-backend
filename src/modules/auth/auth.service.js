import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import { generateOtp } from "../../utils/generateOtp.js";
import { sendEmail } from "../../utils/sendEmail.js";
import { generateToken } from "../../utils/token.js";


export const sendOtpService = async (email) => {
  let user = await User.findOne({ email });

  if (user && user.isVerified) {
    throw new Error("User already exists. Please login.");
  }

  const otp = generateOtp();
  const hashedOtp = await bcrypt.hash(otp, 10);

  if (!user) user = await User.create({ email });

  user.otp = hashedOtp;
  user.otpExpiry = Date.now() + 5 * 60 * 1000;

  await user.save();
  await sendEmail(email, otp);

  return "OTP sent";
};


export const verifyOtpService = async (email, otp) => {
  const user = await User.findOne({ email });

  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(otp, user.otp);

  if (!isMatch) throw new Error("Invalid OTP");

  if (user.otpExpiry < Date.now()) {
    throw new Error("OTP expired");
  }

  user.isVerified = true;
  user.otp = null;
  user.otpExpiry = null;

  await user.save();

  return "OTP verified";
};


export const completeSignupService = async (data) => {
  const { email, password, name, username } = data;

  const user = await User.findOne({ email });

  if (!user || !user.isVerified) {
    throw new Error("Verify OTP first");
  }

  user.password = await bcrypt.hash(password, 10);
  user.name = name;
  user.username = username;

  await user.save();

  return generateToken(user._id);
};


export const loginService = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) throw new Error("User not found");

  const match = await bcrypt.compare(password, user.password);

  if (!match) throw new Error("Invalid credentials");

  user.lastLogin = new Date();
  await user.save();

  return generateToken(user._id);
};