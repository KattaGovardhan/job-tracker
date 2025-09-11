import express from "express";
import userAuth from "../middleware/userAuth.js";
import { getProfile, updateProfile } from "../controllers/profileController.js";

const profileRouter = express.Router();

profileRouter.get("/", userAuth, getProfile);
profileRouter.put("/edit", userAuth, updateProfile);

export default profileRouter;
