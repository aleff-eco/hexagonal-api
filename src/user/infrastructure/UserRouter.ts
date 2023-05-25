import express from "express";

import { userController } from "./dependencies";

export const userRouter = express.Router();

userRouter.get("/", userController.getUsers.bind(userController));

userRouter.post("/", userController.createUsers.bind(userController));

userRouter.delete("/:id", userController.deleteUsers.bind(userController));

userRouter.get("/:id", userController.getByIdUsers.bind(userController));