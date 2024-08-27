import { Request, Response } from "express";
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response) => {
  // check for existing user
  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      return res.status(200).send();
    }

    // if no existing user, create new user
    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json(newUser.toObject());

    // log error if caught and return res status
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating user" });
  }
};

export default {
  createCurrentUser,
};
