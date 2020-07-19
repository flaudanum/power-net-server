import { ErrorRequestHandler } from "express";

export interface ErrorResponseBody {
  message: string;
  data: any
}
export const handleServerError: ErrorRequestHandler = (err, req, res, next) => {
  const error = err as { message: string, statusCode?: number, data?: any[] };

  // Sets default error status to 500 (server error)
  const statusCode = error.statusCode || 500;

  // Sets error response body
  res.status(statusCode).json({ message: error.message, data: error.data });
}

