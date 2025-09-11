import express from "express";
import userAuth from "../middleware/userAuth.js";
import { StatsCount } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/stats-count", userAuth, StatsCount);

export default userRouter;
