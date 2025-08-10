import dotenv from "dotenv";
import { config } from "./src/config/index.js";
import { connectMongo } from "./src/utils/mongoClient.js";
import app from "./server.js";

// Load environment variables first
dotenv.config();

const port = config.server.port;
const SERVER_START_MSG = `Express server started on port: ${port}`;

(async () => {
  try {
    // Connect to MongoDB
    await connectMongo();

    // Start the server
    app.listen(port, () => {
      console.log(SERVER_START_MSG);
      console.log(`Server URL: http://localhost:${port}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
})();
