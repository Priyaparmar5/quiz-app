/** @format */

import { NextFunction, Request, Response } from "express";
import generalResponse, { HttpException } from "../helper/generalResponse";
import { logger } from "../utils/logger";

const errorMiddleware = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const status: number = error.status || 200;
    const message: string = error.message || "Something went wrong";
    console.log(error);
    if (error instanceof HttpException) {
      const status: number = error.status || 200;
      const message: string = error.message || "Something went wrong!";
      const data: any = error.data || {};
      logger.error(
        `[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`
      );
      return generalResponse(
        res,
        [],
        message,
        "error",
        status,
        error.toast as boolean
      );
    }
    logger.error(
      `[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`
    );
    return generalResponse(res, [], message, "error", status, false);
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
