import { Request, Response } from "express";
import User from "../models/user";

const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const currentUser = await User.findOne({ _id: req.userId });
    if (!currentUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(currentUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

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

const updateCurrentUser = async (req: Request, res: Response) => {
  try {
    const {
      fName,
      lName,
      address,
      city,
      state,
      zip,
      role,
      phone,
      profileCreated,
    } = req.body;

    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.fName = fName;
    user.lName = lName;
    user.address = address;
    user.city = city;
    user.state = state;
    user.zip = zip;
    user.role = role;
    user.phone = phone;
    user.profileCreated = profileCreated;

    if (user.role === "Agent") {
      user.clients = [];
    }

    await user.save();

    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating user" });
  }
};

export default {
  createCurrentUser,
  updateCurrentUser,
  getCurrentUser,
};
