import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

router.post("/", jwtCheck, MyUserController.createCurrentAgent);

router.put(
  "/",
  jwtCheck,
  jwtParse,
  validateMyUserRequest,
  MyUserController.updateCurrentAgent
);

// fix this
router.patch("/", MyUserController.addNewClient);

router.get("/", jwtCheck, jwtParse, MyUserController.getCurrentAgent);

export default router;
