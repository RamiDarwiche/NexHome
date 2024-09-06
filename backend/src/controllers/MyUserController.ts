import { Request, Response } from "express";
import Agent from "../models/userTypes";

const getCurrentAgent = async (req: Request, res: Response) => {
  try {
    const currentAgent = await Agent.findOne({ _id: req.userId });
    if (!currentAgent) {
      return res.status(404).json({ message: "Agent not found" });
    }

    res.json(currentAgent);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const createCurrentAgent = async (req: Request, res: Response) => {
  // check for existing user
  try {
    const { auth0Id } = req.body;
    const existingAgent = await Agent.findOne({ auth0Id });

    if (existingAgent) {
      return res.status(200).send();
    }

    // if no existing user, create new user
    const newAgent = new Agent(req.body);
    await newAgent.save();

    res.status(201).json(newAgent.toObject());

    // log error if caught and return res status
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating user" });
  }
};

const updateCurrentAgent = async (req: Request, res: Response) => {
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

    const agent = await Agent.findById(req.userId);

    if (!agent) {
      return res.status(404).json({ message: "Agent not found" });
    }

    agent.fName = fName;
    agent.lName = lName;
    agent.address = address;
    agent.city = city;
    agent.state = state;
    agent.zip = zip;
    agent.role = role;
    agent.phone = phone;
    agent.profileCreated = profileCreated;

    await agent.save();

    res.send(agent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating user" });
  }
};

export default {
  createCurrentAgent,
  updateCurrentAgent,
  getCurrentAgent,
};
