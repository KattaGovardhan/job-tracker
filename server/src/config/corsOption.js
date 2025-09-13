import dotenv from "dotenv";
dotenv.config();

const allowedOrigins = [process.env.CLIENT_URL, process.env.LOCAL_URL].filter(
  Boolean
);

export const corsOption = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
};
