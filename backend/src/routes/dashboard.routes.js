import express from "express";
import { authenticated } from "../middleware/index.js";
import { createSummary, generateIdeas } from "../controllers/dashboard.controller.js";

const router = express.Router();

router.post("/summarize", authenticated, createSummary);
router.post("/generateIdeas", authenticated, generateIdeas);

export default router;
