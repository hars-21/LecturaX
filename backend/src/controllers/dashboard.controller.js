import { askGemini } from "../tools/gemini";

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
