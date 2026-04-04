import express from "express";
import AIRoutes from "./routes/ai.routes.js";
import cors from "cors";

export const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/ai", AIRoutes);
