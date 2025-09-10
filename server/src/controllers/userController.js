import userModel from "../models/userSchema.js";
import jobModel from "../models/jobSchema.js";
import mongoose from "mongoose";

export const StatsCount = async (req, res) => {
  try {
    const userObjectId = new mongoose.Types.ObjectId(req.user.userId);
    const totalApplied = await jobModel.countDocuments({
      createdBy: userObjectId,
    });
    const totalShortlisted = await jobModel.countDocuments({
      createdBy: userObjectId,
      status: "shortlisted",
    });
    const interviewJobs = await jobModel.countDocuments({
      createdBy: userObjectId,
      status: "interview",
    });
    const rejectedJobs = await jobModel.countDocuments({
      createdBy: userObjectId,
      status: "rejected",
    });
    return res.json({
      success: true,
      data: {
        totalApplied,
        totalShortlisted,
        interviewJobs,
        rejectedJobs,
      },
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return res.json({ success: false, message: error.message });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id).select("-password");
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    return res.json({ success: true, data: user });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = await userModel.findById(id);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    user.name = name || user.name;
    user.email = email || user.email;
    await user.save();
    return res.json({ success: true, message: "Profile updated successfully" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const updateUserAvatar = async (req, res) => {
  try {
    const { id } = req.params;
    const { avatar } = req.body;
    const user = await userModel.findById(id);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    user.avatar = avatar;
    await user.save();
    return res.json({ success: true, message: "Avatar updated successfully" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const updateUserCoverImage = async (req, res) => {
  try {
    const { id } = req.params;
    const { coverImage } = req.body;
    const user = await userModel.findById(id);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    user.coverImage = coverImage;
    await user.save();
    return res.json({
      success: true,
      message: "Cover image updated successfully",
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const deleteUserProfile = async (req, res) => {
  try {
    const user = await userModel.findById(req.user.userId);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    await user.remove();
    return res.json({ success: true, message: "Profile deleted successfully" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await userModel.findById(req.user.userId).select("-password");
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    return res.json({ success: true, data: user });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
