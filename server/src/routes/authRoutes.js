import express from "express";
import {
  register,
  login,
  logout,
  isAuthenticated,
  sendResetOTP,
  resetPassword,
} from "../controllers/authController.js";
import userAuth from "../middleware/userAuth.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.get("/is-auth", userAuth, isAuthenticated);
authRouter.post("/send-reset-otp", sendResetOTP);
authRouter.post("/reset-password", resetPassword);

export default authRouter;