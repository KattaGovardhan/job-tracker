import express from "express";
import userAuth from "../middleware/userAuth.js";
import { getProfile, updateProfile } from "../controllers/profileController.js";

const profileRouter = express.Router();

// Get profile
profileRouter.get("/", userAuth, getProfile);

// Edit / Update profile
profileRouter.put("/edit", userAuth, updateProfile);

export default profileRouter;
