import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWish("Bearer")
  ) {
    try {
    } catch (error) {}
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export { protect };
