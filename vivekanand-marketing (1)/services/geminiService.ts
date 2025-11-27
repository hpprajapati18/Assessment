import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Initialize the Gemini client only if the key is available
const apiKey = process.env.API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
): Promise<string> => {
  if (!ai) {
    return "I'm sorry, I'm currently offline (API Key missing). Please contact us via WhatsApp.";
  }

  try {
    // Construct the contents including the history and the new message
    // Note: The history format matches the Content structure required by the SDK
    const contents = [
      ...history,
      {
        role: 'user',
        parts: [{ text: message }]
      }
    ];

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      contents: contents as any,
    });

    return response.text || "";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm having trouble connecting to the server right now. Please try again later or WhatsApp us directly.";
  }
};

export const generateImage = async (prompt: string): Promise<string | null> => {
  if (!ai) return null;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { text: prompt }
        ]
      },
      config: {
        // Nano banana models don't support responseMimeType or specific image configs via standard config object in the same way as Imagen, 
        // but we treat it as generateContent which returns inlineData.
      }
    });

    // Iterate through parts to find the image
    const candidates = response.candidates;
    if (candidates && candidates.length > 0) {
      for (const part of candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.mimeType.startsWith('image/')) {
          return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
};