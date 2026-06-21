import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    fullName: String,
    phone: String,
    addressLine: String,
    city: String,
    state: String,
    pincode: String,
    country: String,
    isDefault:
    {
      type: Boolean,
      default: false
    }
  });

const userSchema = new mongoose.Schema(
  {
    name:
    {
      type: String,
      trim: true
    },
    email:
    {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true
    },
    password:
    {
      type: String
    },
    username:
    {
      type: String,
      unique: true,
      sparse: true
    },
    otp: String,
    otpExpiry: Date,
    isVerified:
    {
      type: Boolean,
      default: false
    },
    phone: String,
    avatar: String,
    avatarPublicId: String,
    addresses: [addressSchema],
    role:
    {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    },
    isBlocked:
    {
      type: Boolean,
      default: false
    },
    cart:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart"
    },
    lastLogin: Date
  }
  , { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
