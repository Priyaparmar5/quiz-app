import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './Users'; 
import { IQuiz } from './Quiz'; 

interface IResult extends Document {
  userId: IUser['_id'];
  //quizId: IQuiz['_id'];
  score: number;
  date: Date;
}

const resultSchema: Schema<IResult> = new Schema<IResult>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
 // quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  score: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const Result = mongoose.model<IResult>('Result', resultSchema);

export default Result;
