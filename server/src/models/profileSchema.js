import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
    unique: true,
  },
  bio: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    default: "",
  },
  skills: [
    {
      type: String,
    },
  ],
  socialLinks: {
    github: String,
    linkedin: String,
    twitter: String,
  },
});

const profileModel =
  mongoose.models.profile || mongoose.model("profile", profileSchema);
export default profileModel;
