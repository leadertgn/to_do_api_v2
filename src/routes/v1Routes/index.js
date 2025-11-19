import express from "express";
import health from "../../utils/health.js"
const v1Router = express.Router();

v1Router.get('/',health(1));

export default v1Router;