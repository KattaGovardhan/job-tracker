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
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser()); // Add this line to parse cookies
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
