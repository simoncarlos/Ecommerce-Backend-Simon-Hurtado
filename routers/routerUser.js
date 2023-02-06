import { Router } from "express"
import { userAuth } from "../middlewares/userAuth.js"

import { 
    userFailController, 
    userSuccessfulController
} from "../controllers/userController.js"

const user = new Router()

// controllers

user.post("/", userAuth, userSuccessfulController) // user auth como punto de partida

user.get("/fail", userFailController)

export default user