import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import MyAgentRoute from "./routes/MyAgentRoute";

mongoose
  .connect(process.env.MONGO_DB_URI as string)
  .then(() => console.log("Connected to database!"));

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "OK!" });
});

app.use("/api/my/agent", MyAgentRoute);

app.listen(3000, () => {
  console.log("Server started on localhost:3000");
});
