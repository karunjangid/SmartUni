import express from "express";
import { automateTask } from "../models/adminTaskModel.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { taskDescription } = req.body;
  try {
    const feedback = automateTask(taskDescription);
    res.json({ feedback });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
