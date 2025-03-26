import express from "express";
import { optimizeResources } from "../models/resourceManagementModel.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { energy, water } = req.body;

  if (!energy || !water) {
    return res.status(400).json({ error: "Both energy and water usage are required." });
  }

  try {
    const results = optimizeResources(Number(energy), Number(water));

    // Debugging: Log the entire response before sending it to the frontend
    console.log("API Response:", results);

    res.json(results);
  } catch (error) {
    console.error("Error in resource management route:", error.message);
    res.status(500).json({ error: "Failed to process resource data." });
  }
});

export default router;
