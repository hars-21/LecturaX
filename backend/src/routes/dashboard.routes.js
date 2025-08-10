import express from "express";
import { authenticated } from "../middleware/index.js";

const router = express.Router();

// Get dashboard data for authenticated user
router.get("/", authenticated, (req, res) => {
  const loggedUser = req.user;
  res.json({
    success: true,
    user: {
      id: loggedUser._id,
      username: loggedUser.username,
      email: loggedUser.email,
      role: loggedUser.role,
    },
    message: "Dashboard data retrieved successfully",
  });
});

export default router;
