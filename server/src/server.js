import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import authRouter from "./routes/authRoutes.js";
import jobRouter from "./routes/jobRoutes.js";
import cookieParser from "cookie-parser"; // Import cookie-parser
import userRouter from "./routes/userRoutes.js";

dotenv.config();

//variables
const PORT = process.env.PORT || 3000;
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser()); // Add this line to parse cookies
await connectDB();

//routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/jobs", jobRouter);

//server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
