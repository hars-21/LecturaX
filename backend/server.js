import dotenv from "dotenv";

// Load environment variables first
dotenv.config();

import express from "express";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import MongoStore from "connect-mongo";

import { config } from "./config/index.js";
import User from "./models/user.js";
import ExpressError from "./utils/ExpressError.js";
import userRouter from "./routes/userRouter.js";
import dashboardRouter from "./routes/dashboardRouter.js";

const app = express();

// Middleware
app.use(cors(config.cors));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Session configuration
const mongoUrl = process.env.DB_URL || "mongodb://localhost:27017/lecturax";

const store = MongoStore.create({
  mongoUrl: mongoUrl,
  crypto: {
    secret: process.env.SECRET || "fallback-secret-change-in-production",
  },
  touchAfter: 24 * 3600, // 24 hours
});

store.on("error", (err) => {
  console.error("ERROR in MONGO SESSION STORE:", err);
});

const sessionOptions = {
  store,
  secret: process.env.SECRET || "fallback-secret-change-in-production",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Only use secure cookies in production
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 7 days
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
  },
};

app.use(session(sessionOptions));

// Passport configuration
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

// API Routes
app.use(config.api.prefix, userRouter);
app.use(`${config.api.prefix}/dashboard`, dashboardRouter);

// 404 handler for unknown routes
app.all("*", (req, res, next) => {
  next(new ExpressError(404, `Route ${req.originalUrl} not found`));
});

// Global error handler
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Internal Server Error" } = err;

  // Log error details in development
  if (process.env.NODE_ENV !== "production") {
    console.error("Error Details:", {
      message: err.message,
      stack: err.stack,
      statusCode,
      url: req.originalUrl,
      method: req.method,
    });
  }

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),
  });
});

export default app;
