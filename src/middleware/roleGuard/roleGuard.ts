import { Request, Response, NextFunction } from "express";
import generalResponse from "../../helper/generalResponse";
import { RoleEnum } from "../../models/roles.model";

function roleGuard(
  role: RoleEnum,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req?.user?.roles.find((e) => role === e)) {
    return next();
  } else {
    return generalResponse(
      res,
      [],
      "You do not have access to this feature",
      "error",
      401,
      false
    );
  }
}

export default roleGuard;
