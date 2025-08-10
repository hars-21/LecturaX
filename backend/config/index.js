export const config = {
  // Server configuration
  server: {
    port: process.env.PORT || 5000,
    env: process.env.NODE_ENV || "development",
  },

  // CORS options
  cors: {
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.CORS_ORIGIN
        : [
            "http://localhost:3000",
            "http://localhost:3001",
            "http://localhost:5173",
          ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  },

  // API configuration
  api: {
    prefix: "/api",
    version: "v1",
  },
};

export default config;
