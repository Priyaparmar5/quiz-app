    import express, { Request, Response } from 'express';
    import { getQuiz, addResult } from '../../controller/quiz/quiz.controller';
import authMiddleware from '../../middleware/passport/userAuth';

    const quizRoute = express.Router();

    // Get all quizzes
    quizRoute.get('/quiz/get-quiz',authMiddleware,
    getQuiz);

    // Add a new quiz
    quizRoute.post('/quiz/add-result',authMiddleware,
    addResult
    );

    export default quizRoute;
