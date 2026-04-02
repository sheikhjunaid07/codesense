import { aiService } from "../services/ai.service.js";

export const getResponse = async (req, res) => {
  const prompt = req.query.prompt;

  if (!prompt) return res.status(400).send("Prompt is Required!!");

  const response = await aiService(prompt);

  res.send(response);
};
