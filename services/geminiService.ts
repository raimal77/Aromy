
import { GoogleGenAI, Type } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getScentRecommendation(preferences: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Given these user preferences: "${preferences}", recommend a type of luxury perfume. Suggest specific scent notes (top, heart, base) and the "vibe" it should give. Format the response as a short, poetic, luxury brand-like recommendation (max 50 words).`,
        config: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
        }
      });
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "An exquisite scent awaits your discovery, tailored to your unique essence.";
    }
  }
}

export const geminiService = new GeminiService();
