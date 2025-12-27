import { GoogleGenAI } from "@google/genai";

// Fixed: Use process.env.API_KEY strictly as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getStyleAdvice = async (userQuery: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: `You are a Senior Art Director at TONI&GUY Bangalore. 
        Your tone is professional, fashion-forward, edgy, and helpful. 
        Provide specific advice on hairstyles, hair care, or trends suitable for the user's query. 
        Keep responses concise (under 100 words) and encourage them to book a consultation at our Indiranagar or UB City branches.
        Do not answer questions unrelated to hair, fashion, or style.`,
      }
    });

    return response.text || "I'm having trouble envisioning a style right now. Please try asking again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our AI Stylist is currently busy with another client. Please try again later.";
  }
};