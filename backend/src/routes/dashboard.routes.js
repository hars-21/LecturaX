import express from "express";
import { isLoggedIn } from "../middleware";

const router = express.Router();

// Get dashboard data for authenticated user
router.get("/", isLoggedIn, (req, res) => {
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
