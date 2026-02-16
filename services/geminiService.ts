
import { GoogleGenAI, Type } from "@google/genai";
import { Question, Quiz } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const parseQuizFromText = async (rawText: string): Promise<Quiz> => {
  // Use gemini-3-pro-preview for complex text tasks involving reasoning and pedagogical content generation
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `
      Identify and extract all questions from the following text extracted from a Word document.
      Correct answers are typically marked with an "X" or a leading checkbox.
      For each question:
      1. Determine if it's a single-choice or multiple-choice question.
      2. Extract all options.
      3. Create a helpful 'hint' for students who get it wrong (do not reveal the answer).
      4. Create a pedagogical 'explanation' for why the correct answer(s) are right.

      TEXT:
      ${rawText}
    `,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          questions: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                questionText: { type: Type.STRING },
                type: { type: Type.STRING, description: "Type of the question: single or multiple" },
                hint: { type: Type.STRING },
                explanation: { type: Type.STRING },
                options: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      id: { type: Type.STRING },
                      text: { type: Type.STRING },
                      isCorrect: { type: Type.BOOLEAN }
                    },
                    required: ["id", "text", "isCorrect"]
                  }
                }
              },
              required: ["id", "questionText", "type", "options", "hint", "explanation"]
            }
          }
        },
        required: ["title", "questions"]
      }
    }
  });

  try {
    // Safely extract text from the response object
    const text = response.text;
    if (!text) {
      throw new Error("La respuesta de la IA está vacía.");
    }
    const data = JSON.parse(text);
    return data as Quiz;
  } catch (error) {
    console.error("Failed to parse Gemini response", error);
    throw new Error("El contenido del documento no pudo ser procesado correctamente.");
  }
};
