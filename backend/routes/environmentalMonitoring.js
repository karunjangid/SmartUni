import express from "express";
import { monitorEnvironment } from "../models/environmentalMonitoringModel.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { sensorData } = req.body; // Expect sensorData in the request body

  if (!sensorData) {
    return res.status(400).json({ error: "Sensor data is required." });
  }

  try {
    const results = monitorEnvironment(sensorData); // Call the model
    res.json(results); // Send the results to the client
  } catch (error) {
    console.error("Error in environment monitoring route:", error.message);
    res.status(500).json({ error: "Failed to process environmental data." });
  }
});

export default router;
