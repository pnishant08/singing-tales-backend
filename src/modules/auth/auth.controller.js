import * as service from "./auth.service.js";

export const sendOtp = async (req, res) => {
  try {
    const msg = await service.sendOtpService(req.body.email);
    res.json({ message: msg });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const msg = await service.verifyOtpService(req.body.email, req.body.otp);
    res.json({ message: msg });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const completeSignup = async (req, res) => {
  try {
    const token = await service.completeSignupService(req.body);
    res.json({ token });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const login = async (req, res) => {
  try {
    const token = await service.loginService(req.body.email, req.body.password);
    res.json({ token });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};