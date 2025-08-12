import express from "express";
import { authenticated } from "../middleware/index.js";
import {
  createSummary,
  generateIdeas,
  extractKeywords,
} from "../controllers/dashboard.controller.js";

const router = express.Router();

router.post("/summarize", authenticated, createSummary);
router.post("/generateIdeas", authenticated, generateIdeas);
router.post("/extract", authenticated, extractKeywords);

export default router;
