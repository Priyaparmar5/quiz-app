import { Request, Response } from 'express';
import Results from '../../models/Result';

export const getQuiz = async (req: Request, res: Response): Promise<void> => {
  // try {
  //   const quizzes: IQuiz[] = await Quiz.find();
  //   res.status(200).json(quizzes);
  // } catch (err) {
  //   res.status(500).json({ error: (err as Error).message });
  // }
};

export const addResult = async (req: Request, res: Response): Promise<void> => {
  try {
    const quizResult = await Results.create(req.body);
    res.status(201).json(quizResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
