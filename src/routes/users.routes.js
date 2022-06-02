import { Router } from "express";
import { createNewUser, getAllUsers } from "../controllers/users.controller";

const usersRouter = Router()

usersRouter.get("/users", getAllUsers);
usersRouter.post("/users", createNewUser);


export default usersRouter;