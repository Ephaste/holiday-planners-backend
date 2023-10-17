import express from "express";
import usersRouter from "./users";
import authRouter from "./authentication";


const mainRouter = express.Router();

//Modules in our server
mainRouter.use("/auth", authRouter);
mainRouter.use("/users", usersRouter);


export default mainRouter;