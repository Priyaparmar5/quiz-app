import { Request, Response } from 'express';
import Results from '../../models/Result';

export const getQuiz = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.id;
    const results = await Results.find({ userId });
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const addResult = async (req: Request, res: Response): Promise<void> => {
  try {    
    const quizResult = await Results.create({score:req.body.totalCorrectAnswers,userId:req.body.userId,answers:req.body.userAnswers, totalQuestion:req.body.totalAnswers,quizName:req.body.quizName});
    res.status(201).json(quizResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
