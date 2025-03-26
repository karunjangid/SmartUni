import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/", async (req, res) => {
  const { videoURL } = req.body;

  if (!videoURL) {
    return res.status(400).json({ error: "Video URL is required" });
  }

  try {
    // Call the Python Flask API
    const response = await axios.post("http://localhost:5001/analyze-video", { videoURL });
    res.json(response.data); // Forward the Python API response
  } catch (error) {
    console.error("Error calling Python API:", error.message);
    res.status(500).json({ error: "Error analyzing video. Please try again." });
  }
});

export default router;
