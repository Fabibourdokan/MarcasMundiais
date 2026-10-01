import express from "express";
import marcaRouter from "./src/router/marcas.js";

const app = express();

app.use(express.json());
app.use(marcaRouter);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});