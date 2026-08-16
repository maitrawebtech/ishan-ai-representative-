import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || process.env.GROQ_API_KEY;

if (!apiKey) throw new Error("Gemini API key is not present");

const genAI = new GoogleGenerativeAI(apiKey);

export default genAI;
