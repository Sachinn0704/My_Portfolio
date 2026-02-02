
import { GoogleGenAI, Type } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "./constants";

// Initialize the GoogleGenAI client with the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askPortfolioAssistant(prompt: string) {
  try {
    // Call generateContent with model and prompt as part of the parameters object.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        // Removed maxOutputTokens to prevent potential response blockage as per guidelines.
      }
    });
    // Access response.text as a property to get the generated string.
    return response.text || "I'm having a bit of trouble connecting right now. Feel free to explore the site!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Something went wrong. Please try again later.";
  }
}

export async function generatePortfolioFromResume(resumeText: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Parse the following resume text into a structured JSON format: \n\n${resumeText}`,
      config: {
        responseMimeType: "application/json",
        systemInstruction: `You are an expert recruiter and data engineer. Convert the provided resume text into a clean, professional JSON object. 
        Ensure you categorize skills as "Core", "Frameworks", "Tools", or "Data". 
        Assign icons from this list: Terminal, Database, Server, Layout, BarChart3, BrainCircuit, Code2, Globe.
        Projects should be categorized as "Development" or "Data Science".
        Provide 4-5 key projects and 6-8 key skills.`,
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            tagline: { type: Type.STRING },
            about: { type: Type.STRING },
            skills: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  level: { type: Type.NUMBER },
                  category: { type: Type.STRING },
                  icon: { type: Type.STRING }
                },
                required: ["name", "level", "category", "icon"]
              }
            },
            projects: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING },
                  tags: { type: Type.ARRAY, items: { type: Type.STRING } },
                  category: { type: Type.STRING }
                },
                required: ["title", "description", "tags", "category"]
              }
            },
            experiences: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  role: { type: Type.STRING },
                  company: { type: Type.STRING },
                  period: { type: Type.STRING },
                  description: { type: Type.ARRAY, items: { type: Type.STRING } }
                },
                required: ["role", "company", "period", "description"]
              }
            }
          },
          required: ["name", "tagline", "about", "skills", "projects", "experiences"]
        }
      }
    });

    // Safely extract text output from response.
    const text = response.text;
    if (!text) {
      throw new Error("Empty response from AI");
    }
    return JSON.parse(text);
  } catch (error) {
    console.error("Resume Generation Error:", error);
    throw error;
  }
}
