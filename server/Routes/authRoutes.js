import express from "express";
import { login, register } from "../Controllers/authController";

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', login);