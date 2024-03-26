import express, { Request, Response } from "express";

import { signUp, login } from "../../controller/user/user.controller";
import authMiddleware from "../../middleware/passport/userAuth";

const userRoute = express.Router();

// Register
userRoute.post("/user/register",signUp);

// Login
userRoute.post("/user/login", login);

export default userRoute;
