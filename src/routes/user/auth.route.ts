import express, { Request, Response } from "express";

import { signUp, login } from "../../controller/user/user.controller";

const userRoute = express.Router();

// Register
userRoute.post("/user/register",signUp);

// Login
userRoute.post("/user/login", login);

export default userRoute;
