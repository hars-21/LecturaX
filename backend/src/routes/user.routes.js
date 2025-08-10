import express from "express";
import passport from "passport";
import userModel from "../models/user.js";
import wrapAsync from "../utils/wrapAsync.js";
import userController from "../controllers/user.controller.js";

const router = express.Router();

// User registration
router.post("/signup", wrapAsync(userController.signup));

// User login
router.post(
  "/signin",
  passport.authenticate("local", {
    failureMessage: true,
  }),
  userController.signin,
);

// Check authentication status
router.get("/", (req, res) => {
  const response = {
    isAuthenticated: !!req.user,
    user: req.user || null,
    message: req.user ? "User is logged in" : "User is not logged in",
  };
  res.json(response);
});

// User logout
router.get("/signout", userController.signout);

export default router;
