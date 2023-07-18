import express from "express";
import homeController from "../controller/homeController";
const router = express.Router();

router.get("/", homeController.handleHelloWorld);

router.get("/user", homeController.handleUser);

export default router;
