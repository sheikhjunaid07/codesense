import { aiService } from "../services/ai.service.js";

export const getReview = async (req, res) => {
  const code = req.body.code;

  if (!code) return res.status(400).send("Prompt is Required!!");

  try {
    const response = await aiService(code);
    res.send(response);
  } catch (error) {
    console.error("AI service error:", error);
    res.status(500).send("Failed to get review. Please try again.");
  }
};
