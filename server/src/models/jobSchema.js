import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
      trim: true,
      set: function (value) {
        return value
          .toLowerCase()
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      },
    },
    company: {
      type: String,
      required: true,
      trim: true,
      set: function (value) {
        return value
          .toLowerCase()
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      },
    },
    location: {
      type: String,
      trim: true,
      set: function (value) {
        return value
          .toLowerCase()
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      },
    },
    status: {
      type: String,
      enum: ["applied", "shortlisted", "interview", "rejected"],
      default: "applied",
    },
    salary: {
      type: Number,
      default: 0,
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "contract"],
      default: "full-time",
    },
    appliedDate: {
      type: Date,
      default: Date.now,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const jobModel = mongoose.models.job || mongoose.model("job", jobSchema);
export default jobModel;
