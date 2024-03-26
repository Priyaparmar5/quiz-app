import { Request, Response, NextFunction } from "express";
import  passport from "passport";
import generalResponse from "../../helper/generalResponse";
import User from '../../models/Users';
import jwt from "jsonwebtoken";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

  // Use passport.authenticate within the middleware
  passport.authenticate('jwt', { session: false }, (err: Error, user: any) => {
    if (err) {
      return next(err);
    }
    console.log(user,"userrr>>");

    if (!user) {
      return generalResponse(
        res,
        [],
        "Your token has expired",
        "error",
        401,
        true
      );
    } else {
      req.user = user;
      return next();
    }
  })(req, res, next);
};

export default authMiddleware;
