import express from "express";
import { atulizarUsuarios, cadastrarUsuario, deletarUsuario, listarUsuarios } from "./controllers/user";

const app = express();

app.use(express.json());

//Rotas

app.post("/users", cadastrarUsuario);
app.get("/users", listarUsuarios);
app.patch("/users/:user_id", atulizarUsuarios);
app.delete("/users/:user_id", deletarUsuario);


export default app;

