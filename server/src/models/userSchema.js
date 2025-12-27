import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    set: function (value) {
      return value
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    },
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
  resetOTP: {
    type: String,
    default: "",
  },
  resetOTPExpireAt: {
    type: Number,
    default: 0,
  },
});
const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;
