import { verifyAccessToken, extractTokenFromHeader } from "../utils/jwt.js";
import User from "../models/user.js";

// Middleware for logging requests
export const requestLogger = (req, res, next) => {
  const start = Date.now();

  // Log when the request starts
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.url} - Request received`,
  );

  // Log when the response is sent
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(
      `[${new Date().toISOString()}] ${req.method} ${
        req.url
      } - Response sent - Status: ${res.statusCode} - Duration: ${duration}ms`,
    );
  });

  next();
};

// Error handling middleware
export const errorHandler = (err, req, res, next) => {
  console.error(`[${new Date().toISOString()}] Error:`, err);

  // Check if headers have already been sent
  if (res.headersSent) {
    return next(err);
  }

  // Check if it's our custom ApiError
  if (err.name === "ApiError" && "statusCode" in err) {
    const apiError = err;
    return res.status(apiError.statusCode).json({
      error: {
        message: apiError.message,
        ...(apiError.details && { details: apiError.details }),
        ...(process.env.NODE_ENV === "development" && {
          stack: apiError.stack,
        }),
      },
    });
  }

  // Default error handling
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({
    error: {
      message: err.message || "Internal Server Error",
      ...(process.env.NODE_ENV === "development" && {
        details: err.message,
        stack: err.stack,
      }),
    },
  });
};

/** Middleware to check if user is authenticated */
export const authenticated = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = extractTokenFromHeader(authHeader);

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access token is required",
      });
    }

    // Verify the token
    const decoded = verifyAccessToken(token);

    // Get user from database to ensure they still exist and are active
    const user = await User.findById(decoded.id).select("-password");

    if (!user || !user.isActive) {
      return res.status(401).json({
        success: false,
        message: "User not found or inactive",
      });
    }

    // Add user to request object
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message || "Invalid token",
    });
  }
};

/** Middleware to check if user is admin */
export const requireAdmin = function (req, res, next) {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Admin access required",
    });
  }
  next();
};
