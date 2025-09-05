import jobModel from "../models/jobSchema.js";

// 👉 Get all jobs
export const totalJobs = async (req, res) => {
  try {
    const jobs = await jobModel.find();
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 👉 Create a new job
export const createJob = async (req, res) => {
  try {
    const job = new jobModel(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 👉 Update a job by ID
export const updateJob = async (req, res) => {
  try {
    const job = await jobModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.status(200).json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 👉 Delete a job by ID
export const deleteJob = async (req, res) => {
  try {
    const job = await jobModel.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
