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
