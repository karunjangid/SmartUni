import express from "express";
import { scheduleClass } from "../models/classSchedulingModel.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { roomNumber, professor, studentCount } = req.body;
  try {
    const result = scheduleClass(roomNumber, professor, studentCount);
    res.json({ schedule: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
