/** @format */

import { RequestHandler } from "express";
import generalResponse from "../helper/generalResponse";

export enum ValidationTypeEnum {
  Body = "body",
  Query = "query",
  Params = "params",
}

const validationMiddleware = (
  type: any,
  value: ValidationTypeEnum = ValidationTypeEnum.Body
): RequestHandler => {
  return async (req, res, next) => {
    try {
      await type.validateAsync(req[value]);
      next();
    } catch (e) {
      const error: any = e;
      if (error.details) {
        return generalResponse(
          res,
          null,
          error.details[0].message,
          "error",
          200,
          true
        );
      }
      return generalResponse(
        res,
        null,
        error.details[0].message,
        "error",
        200,
        true
      );
    }
  };
};

export default validationMiddleware;
