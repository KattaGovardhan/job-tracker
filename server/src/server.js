import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import authRouter from "./routes/authRoutes.js";
import jobRouter from "./routes/jobRoutes.js";
import userRouter from "./routes/userRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();

//variables
const PORT = process.env.PORT || 3000;
const app = express();

//middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(cookieParser());
await connectDB();

//routes
app.use("/api/auth", authRouter);
app.use("/api/jobs", jobRouter);
app.use("/api/user", userRouter);
app.use("/api/profile", profileRoutes);

//server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
