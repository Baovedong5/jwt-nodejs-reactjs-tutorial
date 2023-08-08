import express from "express";
import homeController from "../controller/homeController";
const router = express.Router();

router.get("/", homeController.handleHelloWorld);

router.get("/user", homeController.handleUser);

router.post("/users/create-user", homeController.handleCreateNewUser);

export default router;
