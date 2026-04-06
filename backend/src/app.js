import express from "express";
import AIRoutes from "./routes/ai.routes.js";
import cors from "cors";

export const app = express();

//configuration to resolve cross origin problem
app.use(
  cors({
    origin: "https://codesense-pink.vercel.app/",
    Credential: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["content-type", "Authorization"],
  }),
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/ai", AIRoutes);
