import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});
try {
  const response = await ai.models.generateContent({
    model: "gemini-3.8-flash",
    contents: 'Say hello',
  });
  console.log(response.text);
} catch (error) {
  console.error("Gemini API error:", error.status, error.message);
}


