import express from "express";
import wrapAsync from "../utils/wrapAsync.js";
import userController from "../controllers/users.js";
import { authenticateToken } from "../middleware.js";

const router = express.Router();

// User registration
router.post("/signup", wrapAsync(userController.signup));

// User login
router.post("/signin", wrapAsync(userController.signin));

// Refresh token
router.post("/refresh-token", wrapAsync(userController.refreshToken));

// Get current user profile (protected route)
router.get("/profile", authenticateToken, wrapAsync(userController.getProfile));

// Check authentication status
router.get("/", authenticateToken, (req, res) => {
  const response = {
    isAuthenticated: true,
    user: {
      id: req.user._id,
      username: req.user.username,
      email: req.user.email,
      role: req.user.role,
    },
    message: "User is authenticated",
  };
  res.json(response);
});

// Public route to check if token is valid (optional)
router.get("/verify", async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.json({
      isAuthenticated: false,
      user: null,
      message: "No token provided",
    });
  }

  try {
    const token = authHeader.substring(7);
    const { verifyAccessToken } = await import("../src/utils/jwt.js");
    const decoded = verifyAccessToken(token);

    res.json({
      isAuthenticated: true,
      user: {
        id: decoded.id,
        username: decoded.username,
        email: decoded.email,
        role: decoded.role,
      },
      message: "Token is valid",
    });
  } catch (error) {
    res.json({
      isAuthenticated: false,
      user: null,
      message: "Invalid or expired token",
    });
  }
});

export default router;
