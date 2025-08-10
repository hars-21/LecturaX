import dotenv from "dotenv";
import { config } from "./src/config/index.js";
import { connectMongo } from "./src/utils/mongoClient.js";
import app from "./server.js";

// Load environment variables first
dotenv.config();

const port = config.server.port;
const SERVER_START_MSG = `🚀 Express server started on port: ${port}`;
const ENV_MSG = `📊 Environment: ${config.server.env}`;

// Graceful shutdown function
const gracefulShutdown = (signal) => {
  console.log(`\n🛑 ${signal} received. Starting graceful shutdown...`);

  // Close server
  server.close((err) => {
    if (err) {
      console.error("❌ Error during server shutdown:", err);
      process.exit(1);
    }

    console.log("✅ Server closed successfully");

    // Close database connection
    import("mongoose").then(({ default: mongoose }) => {
      mongoose.connection.close(() => {
        console.log("✅ Database connection closed successfully");
        process.exit(0);
      });
    });
  });

  // Force shutdown after 10 seconds
  setTimeout(() => {
    console.error("❌ Forced shutdown after timeout");
    process.exit(1);
  }, 10000);
};

// Start server
let server;

(async () => {
  try {
    // Connect to MongoDB
    await connectMongo();

    // Start the server
    server = app.listen(port, () => {
      console.log(SERVER_START_MSG);
      console.log(ENV_MSG);
      console.log(`🌐 Server URL: http://localhost:${port}`);
      console.log(`🏥 Health check: http://localhost:${port}/health`);
    });

    // Handle server errors
    server.on("error", (error) => {
      if (error.syscall !== "listen") {
        throw error;
      }

      const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

      switch (error.code) {
        case "EACCES":
          console.error(`❌ ${bind} requires elevated privileges`);
          process.exit(1);
          break;
        case "EADDRINUSE":
          console.error(`❌ ${bind} is already in use`);
          process.exit(1);
          break;
        default:
          throw error;
      }
    });

    // Handle unhandled promise rejections
    process.on("unhandledRejection", (reason, promise) => {
      console.error("❌ Unhandled Rejection at:", promise, "reason:", reason);
      gracefulShutdown("UNHANDLED_REJECTION");
    });

    // Handle uncaught exceptions
    process.on("uncaughtException", (error) => {
      console.error("❌ Uncaught Exception:", error);
      gracefulShutdown("UNCAUGHT_EXCEPTION");
    });

    // Handle graceful shutdown signals
    process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
    process.on("SIGINT", () => gracefulShutdown("SIGINT"));
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
})();
