import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function askGemini(instruction, content, temperature = 0.5) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: content,
    config: {
      systemInstruction: instruction,
    },
    temperature: temperature,
  });
  const result = response.text;
  return result;
}
