import cors from "cors";
import { dbConn } from "./database/dbConnection.js";
import dotenv from "dotenv";
import express from "express";
import { globalError } from "./middleware/globalError.js";
import logsRoutes from "./modules/logs/logs.routes.js";

dotenv.config();
  const app = express();
  app.use(express.urlencoded({ extended: true })); 
  
  app.use(express.json());

  app.use("/api", logsRoutes)

  app.use(cors());
  const port = process.env.port || 3000;
  
  
  app.use(globalError)
  
  app.get("/", (req, res) => res.send("Hello World!"));
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
  