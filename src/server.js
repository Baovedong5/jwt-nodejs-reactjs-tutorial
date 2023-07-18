import express from "express";
import configViewEngine from "./config/viewEngine";
import router from "./routers/web";
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8081;

//config view engine
configViewEngine(app);

//init Web Router
app.use("/", router);

app.listen(PORT, () => {
  console.log(">>> JWT Backend is running on the port = " + PORT);
});
