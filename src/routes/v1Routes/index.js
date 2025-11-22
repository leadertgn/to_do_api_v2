import express from "express";
import health from "../../utils/health.js"
import authRouter from "./authRoutes.js";

const v1Router = express.Router();

v1Router.get('/',health(1));
v1Router.use('/auth',authRouter);

export default v1Router;