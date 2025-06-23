import express from "express";
import { registerBusiness, loginUser, addUserToBusiness } from "../controllers/authController.js";

const router = express.Router();

router.post("/register-business", registerBusiness); // admin register
router.post("/login", loginUser);                    // login all users
router.post("/add-user", addUserToBusiness);         // add accountant/viewer by business ID & password

export default router;
