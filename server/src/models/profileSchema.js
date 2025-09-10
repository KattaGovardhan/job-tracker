import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
    unique: true, // one profile per user
  },
  bio: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  dob: {
    type: Date,
  },
  skills: [
    {
      type: String,
    },
  ],
  education: [
    {
      degree: String,
      institution: String,
      year: String,
    },
  ],
  experience: [
    {
      role: String,
      company: String,
      from: Date,
      to: Date,
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
