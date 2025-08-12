import Profile from "../models/profile.js";
import User from "../models/user.js";
import { generateTokens, verifyRefreshToken } from "../utils/jwt.js";

/**
 * User signup controller
 */
export const signup = async (req, res, next) => {
  try {
    const { username, email, password, role } = req.body;

    // Validate required fields
    if (!username || !email || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User with this email or username already exists",
      });
    }

    // Create new user
    const newUser = new User({ username, email, password, role });
    const savedUser = await newUser.save();

    // Create corresponding profile
    const newProfile = new Profile({ username, email, role });
    await newProfile.save();

    // Generate JWT tokens
    const tokens = generateTokens(savedUser);

    // Update last login
    await savedUser.updateLastLogin();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email,
        role: savedUser.role,
        createdAt: savedUser.createdAt,
      },
      tokens,
    });
  } catch (err) {
    console.error("Signup error:", err);

    // Handle mongoose validation errors
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors,
      });
    }

    // Handle duplicate key errors
    if (err.code === 11000) {
      const field = Object.keys(err.keyPattern)[0];
      return res.status(409).json({
        success: false,
        message: `${field} already exists`,
      });
    }

    res.status(500).json({
      success: false,
      message: err.message || "Registration failed",
    });
  }
};

/**
 * User signin controller
 */
export const signin = async (req, res, next) => {
  try {
    const { usernameOrEmail, password } = req.body;

    // Validate required fields - accept either email or username
    const loginField = usernameOrEmail;
    if (!loginField || !password) {
      return res.status(400).json({
        success: false,
        message: "Email/username and password are required",
      });
    }

    // Find user by email or username
    const user = await User.findOne({
      $or: [{ email: loginField }, { username: loginField }],
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Check if user is active
    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        message: "Account is deactivated. Please contact support.",
      });
    }

    // Compare password
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Generate JWT tokens
    const tokens = generateTokens(user);

    // Update last login
    await user.updateLastLogin();

    res.json({
      success: true,
      message: "User signed in successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        lastLogin: user.lastLogin,
      },
      tokens,
    });
  } catch (err) {
    console.error("Signin error:", err);
    res.status(500).json({
      success: false,
      message: "Sign in failed",
    });
  }
};

/**
 * Refresh token controller
 */
export const refreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({
        success: false,
        message: "Refresh token is required",
      });
    }

    // Verify refresh token
    const decoded = verifyRefreshToken(refreshToken);

    // Get user from database
    const user = await User.findById(decoded.id);

    if (!user || !user.isActive) {
      return res.status(401).json({
        success: false,
        message: "User not found or inactive",
      });
    }

    // Generate new tokens
    const tokens = generateTokens(user);

    res.json({
      success: true,
      message: "Tokens refreshed successfully",
      tokens,
    });
  } catch (err) {
    console.error("Refresh token error:", err);
    res.status(401).json({
      success: false,
      message: "Invalid or expired refresh token",
    });
  }
};

/**
 * Get current user profile
 */
export const getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        phone: user.phone,
        bio: user.bio,
        location: user.location,
        website: user.website,
        profilePicture: user.profilePicture,
        isVerified: user.isVerified,
        isActive: user.isActive,
        lastLogin: user.lastLogin,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  } catch (err) {
    console.error("Get profile error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to get user profile",
    });
  }
};

/**
 * Update user profile
 */
export const updateProfile = async (req, res, next) => {
  try {
    const changes = req.body;
    const userId = req.user.id;

    // Find and update user
    const updatedUser = await User.findByIdAndUpdate(userId, changes, {
      new: true,
      runValidators: true,
    }).select("-password");

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      message: "Profile updated successfully",
      user: {
        id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        phone: updatedUser.phone,
        bio: updatedUser.bio,
        location: updatedUser.location,
        website: updatedUser.website,
        updatedAt: updatedUser.updatedAt,
      },
    });
  } catch (err) {
    console.error("Update profile error:", err);

    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors,
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to update profile",
    });
  }
};

// Default export for compatibility
export default {
  signup,
  signin,
  refreshToken,
  getProfile,
  updateProfile,
};
