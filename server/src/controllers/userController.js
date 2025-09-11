
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
