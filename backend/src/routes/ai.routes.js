import express from "express";
import * as AIController from "../controllers/ai.controller.js";

const router = express.Router();

router.get("/get-response", AIController.getResponse);

export default router;
