import { askGemini } from "../tools/gemini.js";

export const createSummary = async (req, res) => {
  const { text } = req.body;
  const content = `Summarize the following:\n\n${text}`;
  const instruction = "You are a text summarizer. Return clear, concise summaries.";
  const temperature = 0.2;

  if (!text) {
    return res.status(400).json({ error: "Text body parameter is required." });
  }

  try {
    const summary = await askGemini(instruction, content, temperature);
    res.json({ success: true, summary });
  } catch (error) {
    console.error("Error occurred while summarizing text:", error);
    res.status(500).json({ error: "An error occurred while processing your request." });
  }
};

export const generateIdeas = async (req, res) => {
  const { topic } = req.body;
  const content = `Give me 5 unique and creative ideas for: ${topic}`;
  const instruction = "You are a creative idea generator. Always return concise and clear ideas.";
  const temperature = 0.8;

  if (!topic) {
    return res.status(400).json({ error: "Topic body parameter is required." });
  }

  try {
    const ideas = await askGemini(instruction, content, temperature);
    res.json({ success: true, ideas });
  } catch (error) {
    console.error("Error occurred while generating ideas:", error);
    res.status(500).json({ error: "An error occurred while processing your request." });
  }
};

export const extractKeywords = async (req, res) => {
  const { text } = req.body;
  const content = `Extract the 10 most important keywords from the following text:\n\n${text}`;
  const instruction =
    "You are a keyword extraction assistant. Only return the most relevant keywords or short phrases, comma-separated.";
  const temperature = 0.2;

  if (!text) {
    return res.status(400).json({ error: "Text body parameter is required." });
  }

  try {
    const keywords = await askGemini(instruction, content, temperature);
    res.json({ success: true, keywords });
  } catch (error) {
    console.error("Error occurred while extracting keywords:", error);
    res.status(500).json({ error: "An error occurred while processing your request." });
  }
};
