import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  verifyOTP: {
    type: String,
    default: "",
  },
  verifyOTPExpireAt: {
    type: Number,
    default: 0,
  },
  isAccountVerified: {
    type: Boolean,
    default: false,
  },
  resetOTP: {
    type: String,
    default: "",
  },
  resetOTPExpireAt: {
    type: Number,
    default: 0,
  },
  avatar: {
    public_id: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default:
        "https://res.cloudinary.com/dk6s0qg92/image/upload/v1629744368/user-default_qj9e2j.png",
    },
  },
  coverImage: {
    public_id: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
  },
});
const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;
