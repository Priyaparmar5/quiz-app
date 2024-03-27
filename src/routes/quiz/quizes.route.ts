import express, { Request, Response } from "express";
import { getQuiz, addResult } from "../../controller/quiz/quiz.controller";
import authMiddleware from "../../middleware/passport/userAuth";

const quizRoute = express.Router();

quizRoute.get("/quiz/result/:id", getQuiz);

quizRoute.post("/quiz/add-result", addResult);

export default quizRoute;
