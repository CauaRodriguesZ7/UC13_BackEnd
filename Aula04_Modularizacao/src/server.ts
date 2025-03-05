import express from "express";
import usuariosRoutes from "./routes/usuarioRoutes";

const app = express();
const PORT: number = 3333;

app.use(express.json());
app.use("/api", usuariosRoutes);

app.listen(PORT, () =>{
    console.log(`🔥 Servidor rodando em http://localhost:${PORT}`)
})
