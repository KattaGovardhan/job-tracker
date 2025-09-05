import express from "express";
import {
  totalJobs,
  createJob,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";
const jobRouter = express.Router();

jobRouter.get("/job", totalJobs);
jobRouter.post("/job", createJob);
jobRouter.put("/job/:id", updateJob);
jobRouter.delete("/job/:id", deleteJob);

export default jobRouter;
