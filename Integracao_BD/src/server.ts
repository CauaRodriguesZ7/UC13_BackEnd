import "reflect-metadata";
import express, { Application } from "express";
import userRoutes from "./routes/userRoutes";
import { AppDataSource } from "./config/ormconfig";
import { error, log } from "console";

const app: Application = express();
app.use(express.json());
app.use('/api', userRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("Conexão ao banco de dados estabelecido!");
  })
  .catch((error) => {
    console.log("Erro ao conectar ao banco de dados;", error);
  });