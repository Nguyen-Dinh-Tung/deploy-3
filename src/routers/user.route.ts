import express from "express";
import userController from "../controllers/user.controller"

const userRoute = express.Router();

userRoute.get('/info/:id', userController.getUserById)

export default userRoute;



