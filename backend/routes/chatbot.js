import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();

// Load API key from environment variable
const API_KEY = "ENTER YOUR GOOGLE API KEY HERE"; // Replace with process.env.GOOGLE_API_KEY if using environment variables

if (!API_KEY) {
  console.error("ERROR: Google API key is missing.");
  throw new Error("Google API key is missing.");
}

const genAI = new GoogleGenerativeAI(API_KEY);

router.post("/", async (req, res) => {
  const { text } = req.body;

  console.log("Received request body:", req.body);

  if (!text) {
    return res.status(400).json({ success: false, message: "Text is required." });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Corrected generateContent method
    const result = await model.generateContent([{ text }]);

    // Extract response safely
    const response = result.response.text();
    console.log(response);
    res.json({ success: true, response });
  } catch (error) {
    console.error("Error in /api/chatbot route:", error.stack);
    res.status(500).json({ success: false, message: "Failed to generate content." });
  }
});

export default router;


