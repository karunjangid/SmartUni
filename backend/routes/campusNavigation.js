import express from "express";
import { findShortestPath } from "../models/campusNavigationModel.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { source, destination } = req.body;

  if (!source || !destination) {
    return res.status(400).json({ error: "Source and destination are required." });
  }

  try {
    const { path, distance } = findShortestPath(campusGraph, source, destination);
    res.json({ path, distance });
  } catch (error) {
    console.error("Error calculating route:", error.message);
    res.status(500).json({ error: "Failed to calculate route." });
  }
});

export default router;
