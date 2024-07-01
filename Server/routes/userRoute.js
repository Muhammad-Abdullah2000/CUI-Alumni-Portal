import express from "express";
import { getUser, login, newUser } from "../controller/userController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/user", newUser);

router.post("/login", login);

router.get("/getuser", verifyToken ,getUser);

export default router;
