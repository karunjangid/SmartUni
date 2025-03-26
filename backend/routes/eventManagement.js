import express from "express";
import {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} from "../models/eventManagementModel.js";

const router = express.Router();

// POST: Create a new event
router.post("/", (req, res) => {
  try {
    const newEvent = createEvent(req.body);
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET: Retrieve all events
router.get("/", (req, res) => {
  res.json(getAllEvents());
});

export default router;
