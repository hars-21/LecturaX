import express from "express";
import { authenticated } from "../middleware/index.js";
import { createSummary } from "../controllers/dashboard.controller.js";

const router = express.Router();

router.post("/summarize", authenticated, createSummary);
export default router;
