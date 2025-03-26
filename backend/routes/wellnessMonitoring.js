import express from "express";
import { analyzeWellness } from "../models/wellnessMonitoringModel.js";

const router = express.Router();

router.post("/analyze", (req, res) => {
  const { heartRate, sleepHours, activityHours } = req.body;
  try {
    const insights = analyzeWellness(heartRate, sleepHours, activityHours);
    res.json({ insights });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router; // Ensure this is the default export
