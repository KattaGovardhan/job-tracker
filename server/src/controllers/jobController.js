import jobModel from "../models/jobSchema.js";

export const getAllJobs = async (req, res) => {
  try {
    const { search, status, jobType, page = 1, limit = 10 } = req.query;

    const query = { createdBy: req.user.userId };

    // Search (role, company, location)
    if (search) {
      query.$or = [
        { role: { $regex: search, $options: "i" } },
        { company: { $regex: search, $options: "i" } },
        { location: { $regex: search, $options: "i" } },
      ];
    }

    // Filter by status
    if (status && status !== "all") {
      query.status = status;
    }

    // Filter by jobType
    if (jobType && jobType !== "all") {
      query.jobType = jobType;
    }

    const jobs = await jobModel
      .find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const totalJobs = await jobModel.countDocuments(query);

    res.status(200).json({
      jobs,
      totalJobs,
      totalPages: Math.ceil(totalJobs / limit),
      currentPage: Number(page),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createJob = async (req, res) => {
  try {
    req.body.createdBy = req.user.userId;
    const job = new jobModel(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    console.error("Error creating job:", err);
    res.status(400).json({ error: err.message });
  }
};

export const updateJob = async (req, res) => {
  try {
    const job = await jobModel.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user.userId },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.status(200).json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const job = await jobModel.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user.userId,
    });
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
