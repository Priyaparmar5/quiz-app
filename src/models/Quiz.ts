import mongoose, { Document, Schema, Model } from 'mongoose';

export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface IQuiz extends Document {
  title: string;
  questions: Question[];
}

const quizSchema = new Schema<IQuiz>({
  title: { type: String, required: true },
  questions: [{
    question: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswer: { type: Number, required: true },
  }],
});

const QuizModel: Model<IQuiz> = mongoose.model<IQuiz>('Quiz', quizSchema);

export default QuizModel;
