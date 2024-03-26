
import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import indexRoute from './routes/index.route'; import passport from 'passport';
import './middleware/passport/passport'; 
const app = express();
const PORT = process.env.PORT || 5000;
const dotEnv = require('dotenv');

console.log("helloooo");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://0.0.0.0:27017/quizApp')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use(indexRoute);
app.use(passport.initialize());
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
