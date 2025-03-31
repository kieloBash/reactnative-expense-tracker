import express from "express";
import "dotenv/config";

import authRoutes from "./routes/authRoutes.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/auth", authRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server is running on port " + PORT);
  connectDB();
});
