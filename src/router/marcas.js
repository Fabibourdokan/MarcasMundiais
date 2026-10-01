import express from "express";
import Controllermarcas from "../controller/marcas.js"

const router = express.Router();

const controllers = new Controllermarcas()

router.get("/api/marcas/:index", controllers.PegarUm);
router.get("/api/marcas/", controllers.PegarTodos);
router.post("/api/marcas/", controllers.Adicionar);
router.put("/api/marcas/:index", controllers.Alterar);
router.delete("/api/marcas/:index", controllers.Deletar);