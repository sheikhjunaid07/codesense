import express from "express";
import * as AIController from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/get-review", AIController.getReview);

export default router;
