import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

export const authenticationMiddleware: RequestHandler = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);

  if (!token) {
    res.status(401).json({ message: "Unauthenticated" });
    return;
  }
  try {
    const { userId, isAdmin } = jwt.verify(token, process.env.JWT_SECRET) as {
      userId: string;
      isAdmin: boolean;
    };
    req.userId = userId;
    req.isAdmin = isAdmin;

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
