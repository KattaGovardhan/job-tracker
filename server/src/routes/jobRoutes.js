import express from "express";
import {
  getAllJobs,
  createJob,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";
import userAuth from "../middleware/userAuth.js";

const jobRouter = express.Router();

jobRouter.get("/", userAuth, getAllJobs);
jobRouter.post("/", userAuth, createJob);
jobRouter.put("/:id", userAuth, updateJob);
jobRouter.delete("/:id", userAuth, deleteJob);

export default jobRouter;
