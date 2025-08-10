import Profile from "../models/profile.js";
import User from "../models/user.js";

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
        message: "All fields (username, email, password, role) are required",
      });
    }

    // Create new user
    const newUser = new User({ username, email, role });

    // Create corresponding profile
    const newProfile = new Profile({ username, email, role });

    // Register user with passport-local-mongoose
    const registeredUser = await User.register(newUser, password);

    // Save profile
    await newProfile.save();

    // Auto-login after registration
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: {
          id: registeredUser._id,
          username: registeredUser.username,
          email: registeredUser.email,
          role: registeredUser.role,
        },
      });
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(400).json({
      success: false,
      message: err.message || "Registration failed",
    });
  }
};

/**
 * User signin controller
 */
export const signin = async (req, res) => {
  res.json({
    success: true,
    message: "User signed in successfully",
    user: {
      id: req.user._id,
      username: req.user.username,
      email: req.user.email,
      role: req.user.role,
    },
  });
};

/**
 * User signout controller
 */
export const signout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.json({
      success: true,
      message: "User signed out successfully",
    });
  });
};

// Default export for compatibility
export default { signup, signin, signout };
