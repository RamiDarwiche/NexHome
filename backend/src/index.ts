import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import MyUserRoute from "./routes/MyUserRoute";

mongoose
  .connect(process.env.MONGO_DB_URI as string)
  .then(() => console.log("Connected to database!"));

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/my/user", MyUserRoute);

app.listen(3000, () => {
  console.log("Server started on localhost:3000");
});
