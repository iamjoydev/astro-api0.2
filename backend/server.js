import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cron from "node-cron";

import dailyRouter from "./routes/daily.js";
import weeklyRouter from "./routes/weekly.js";
import kundliRouter from "./routes/kundli.js";
import matchRouter from "./routes/match.js";
import adminRouter from "./routes/admin.js";

import { regenerateDaily } from "./controllers/dailyController.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/daily", dailyRouter);
app.use("/api/weekly", weeklyRouter);
app.use("/api/kundli", kundliRouter);
app.use("/api/match", matchRouter);
app.use("/api/admin", adminRouter);

// Cron: refresh daily horoscope at midnight IST
cron.schedule("0 0 * * *", async () => {
  console.log("🌅 Running Daily Astrology Update...");
  await regenerateDaily();
  console.log("✅ Daily Horoscope + Panchang updated");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Backend running on ${PORT}`));