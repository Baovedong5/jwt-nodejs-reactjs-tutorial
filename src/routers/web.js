import express from "express";
import homeController from "../controller/homeController";
const router = express.Router();

router.get("/", homeController.handleHelloWorld);

router.get("/about", (req, res) => {
  return res.send("Phuongdz");
});

export default router;
