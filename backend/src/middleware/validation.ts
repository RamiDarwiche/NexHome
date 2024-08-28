import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

const handleValidationErrors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateMyUserRequest = [
  body("fName")
    .isString()
    .notEmpty()
    .withMessage("First name must be a string"),
  body("lName").isString().notEmpty().withMessage("Last name must be a string"),
  body("address").isString().notEmpty().withMessage("Address must be a string"),
  body("city").isString().notEmpty().withMessage("City must be a string"),
  body("state").isString().notEmpty().withMessage("State must be a string"),
  body("zip").isString().notEmpty().withMessage("Zip code must be a number"),
  body("role").isString().notEmpty().withMessage("Role must be a string"),
  body("phone")
    .isString()
    .notEmpty()
    .withMessage("Phone number must be a number"),
  handleValidationErrors,
];
