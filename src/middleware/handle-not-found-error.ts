import { RequestHandler } from "express";


export const handleNotFoundError: RequestHandler = (req, res, next) => {
  // Sets error response body
  res.status(404).json({
    message: "Requested resource does not exist",
    url: req.url,
    method: req.method
  });
}
