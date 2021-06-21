import { Router } from "express";
import { ProdutoController } from "../controllers/ProdutoController";


const router = Router();
const produtoController = new ProdutoController();

router.post("/produto/cadastrar", produtoController.cadastrar);
router.get("/produto/listar", produtoController.listar);

export { router };
