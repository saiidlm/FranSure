import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import franchiseeRoutes from "./routes/franchiseeRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "FranSure API is running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/franchisees", franchiseeRoutes);

app.listen(PORT, () => {
  console.log(`FranSure server running on http://localhost:${PORT}`);
});
