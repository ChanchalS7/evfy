import express from "express";
import {
	registerController,
	loginController, forgotPasswordController
} from "../controllers/authControllers.js";


//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

// Search || POST
router.post("/search", searchController);


export default router;
