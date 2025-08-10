/** Middleware to check if user is authenticated */
export const isLoggedIn = function (req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(401).json({
      success: false,
      message: "Please signin to continue",
    });
  }
  next();
};

/** Middleware to check if user is admin */
export const isAdmin = function (req, res, next) {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Admin access required",
    });
  }
  next();
};

/** Middleware to check if user is teacher */
export const isTeacher = function (req, res, next) {
  if (!req.user || req.user.role !== "teacher") {
    return res.status(403).json({
      success: false,
      message: "Teacher access required",
    });
  }
  next();
};

/** Middleware to check if user is student */
export const isStudent = function (req, res, next) {
  if (!req.user || req.user.role !== "student") {
    return res.status(403).json({
      success: false,
      message: "Student access required",
    });
  }
  next();
};

/** Middleware to check if user owns the resource */
export const isOwner = function (req, res, next) {
  if (!req.user || req.user._id.toString() !== req.params.id) {
    return res.status(403).json({
      success: false,
      message: "You can only access your own resources",
    });
  }
  next();
};

/** Middleware to check if user is authorized (admin or owner) */
export const isAuthorized = function (req, res, next) {
  if (
    !req.user ||
    (req.user.role !== "admin" && req.user._id.toString() !== req.params.id)
  ) {
    return res.status(403).json({
      success: false,
      message: "You are not authorized to access this resource",
    });
  }
  next();
};
