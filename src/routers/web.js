import express from "express";
import homeController from "../controller/homeController";
const router = express.Router();

router.get("/", homeController.handleHelloWorld);

router.get("/user", homeController.handleUser);

router.post("/delete-user/:id", homeController.handleDeleteUser);

router.get("/update-user/:id", homeController.getUpdateUserPage);

router.post("/users/update-user", homeController.handleUpdateUser);

router.post("/users/create-user", homeController.handleCreateNewUser);

export default router;
