import express, { Application } from "express";
import produtoRoutes from "./routes/ProdutoRoutes"

const app: Application = express();
app.use(express.json());

app.use("/api", router);

