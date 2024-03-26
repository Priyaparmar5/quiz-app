/** @format */

import { Response } from "express";

const generalResponse = (
  response: Response,
  data: any = [],
  message = "",
  response_type = "success",
  statusCode = 200,
  toast = false
) => {
  let code = statusCode;
  if (response_type === "error" && code === 200) code = 400;

  response.status(code).send({
    data: data,
    message: message,
    toast: toast,
    response_type: response_type,
  });
};
export default generalResponse;


