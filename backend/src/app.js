import express from "express";
import AIRoutes from "./routes/ai.routes.js";

export const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/ai", AIRoutes);
