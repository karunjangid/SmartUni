import express from "express";
import cors from "cors";
import mongoose from 'mongoose';
import classSchedulingRoutes from "./routes/classScheduling.js";
import performanceAnalyticsRoutes from "./routes/performanceAnalytics.js";
import resourceManagementRoutes from "./routes/resourceManagement.js";
import safetyResponseRoutes from "./routes/safetyResponse.js";
import environmentalMonitoringRoutes from "./routes/environmentalMonitoring.js";
import adminTaskRoutes from "./routes/adminTask.js";
import EventManagement from "./routes/eventManagement.js";
const app = express();


app.use(cors());
app.use(express.json());

app.use("/api/schedule-class", classSchedulingRoutes);
app.use("/api/analyze-performance", performanceAnalyticsRoutes);
app.use("/api/resource-management", resourceManagementRoutes);
app.use("/api/safety-response", safetyResponseRoutes);
app.use("/api/environment-monitoring", environmentalMonitoringRoutes);
app.use("/api/admin-task", adminTaskRoutes);
app.use("/api/event-management", EventManagement);
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/university', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


app.get("/", (req, res) => {
  res.send("Server is running successfully!");
});

app.use(express.json()); // Middleware to parse JSON requests

import wellnessMonitoringRoutes from "./routes/wellnessMonitoring.js";
app.use("/api/wellness-monitoring", wellnessMonitoringRoutes);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
