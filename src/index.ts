
import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import indexRoute from './routes/index.route'; 
const app = express();
const PORT = process.env.PORT || 5000;
const dotEnv = require('dotenv');
//import './middleware/passport/passport';
import  passport  from "passport";

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());

mongoose.connect('mongodb://0.0.0.0:27017/quizApp')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use(indexRoute);
//app.use(passport.initialize());
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
