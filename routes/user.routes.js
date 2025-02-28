import express from "express";
import { createNewUser, getUserDat } from "../controllers/user.controllers.js";

const router = express.Router()

router.get("/", getUserDat)
router.get("/create-user", createNewUser)


export default router