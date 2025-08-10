import express from "express";
import wrapAsync from "../utils/wrapAsync.js";
import userController from "../controllers/user.controller.js";

const router = express.Router();

// User registration
router.post("/signup", wrapAsync(userController.signup));

// User login
router.post("/signin", wrapAsync(userController.signin));

// Refresh token
router.post("/refresh", wrapAsync(userController.refreshToken));

// Get user profile (protected route)
router.get("/profile", wrapAsync(userController.getProfile));

// Update user profile (protected route)
router.put("/profile", wrapAsync(userController.updateProfile));

export default router;
