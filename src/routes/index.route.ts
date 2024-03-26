/** @format */

import * as express from "express";
import userRoute from "./user/auth.route";
import quizRoute from "./quiz/quizes.route";

const indexRoute = express.Router();

indexRoute.use("/", [
  userRoute,
  quizRoute
]);
console.log("heyyy");

export default indexRoute;
