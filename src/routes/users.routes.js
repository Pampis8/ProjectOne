import { Router } from "express";
import { getAllUsers } from "../controllers/users.controller";

const usersRouter = Router()

usersRouter.get("/users", getAllUsers);

export default usersRouter;