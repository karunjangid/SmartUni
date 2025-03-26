import express from "express";
import { analyzePerformance } from "../models/performanceAnalyticsModel.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { students } = req.body; // Array of {name, grades, attendance}
  try {
    const insights = analyzePerformance(students);
    res.json({ insights });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
