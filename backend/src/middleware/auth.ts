import { Request, Response, NextFunction } from "express";
import { auth } from "express-oauth2-jwt-bearer";
import jwt from "jsonwebtoken";
import Agent from "../models/userTypes";

declare global {
  namespace Express {
    interface Request {
      userId: string;
      auth0Id: string;
    }
  }
}

export const jwtCheck = auth({
  audience: "nexhome-api",
  issuerBaseURL: "https://dev-v4afr4gc4zeiogzu.us.auth0.com/",
  tokenSigningAlg: "RS256",
});

export const jwtParse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.sendStatus(401);
  }

  const token = authorization.split(" ")[1];

  try {
    const decoded = jwt.decode(token) as jwt.JwtPayload;
    const auth0Id = decoded.sub;

    const agent = await Agent.findOne({ auth0Id });

    if (!agent) {
      return res.sendStatus(401);
    }

    req.auth0Id = auth0Id as string;
    req.userId = agent._id.toString();
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
};
