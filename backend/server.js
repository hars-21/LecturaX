import dotenv from "dotenv";

// Load environment variables first
dotenv.config();

import express from "express";
import cors from "cors";
import { config } from "./src/config/index.js";
import ExpressError from "./src/utils/ExpressError.js";
import userRoutes from "./src/routes/user.routes.js";
import dashboardRoutes from "./src/routes/dashboard.routes.js";
import { errorHandler, requestLogger } from "./src/middleware/index.js";

const app = express();

// Middlewares
app.use(cors(config.cors));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(requestLogger);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the backend server",
    version: "2.0.0",
    environment: process.env.NODE_ENV || "development",
  });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

// API Routes
app.use("/api", userRoutes);
app.use("/api", dashboardRoutes);

// 404 handler for unknown routes
app.all("*", (req, res, next) => {
  next(new ExpressError(404, `Route ${req.originalUrl} not found`));
});

// Error handling middleware
app.use((err, req, res, next) => {
  errorHandler(err, req, res, next);
});

export default app;
