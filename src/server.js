import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routers/web";
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8081;

//config view engine
configViewEngine(app);

//init Web Router
initWebRoutes(app);

app.listen(PORT, () => {
  console.log(">>> JWT Backend is running on the port = " + PORT);
});
