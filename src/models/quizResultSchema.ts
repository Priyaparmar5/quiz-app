const mongoose = require('mongoose');

const quizResultSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  answers: [Number], // Array of selected answer indices
  score: Number,
  timestamp: { type: Date, default: Date.now }
});

const QuizResult = mongoose.model('QuizResult', quizResultSchema);
