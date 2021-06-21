import { Request, Response } from "express";
import ProdutoSchema from "../models/ProdutoSchema";

class ProdutoController {
  async listar(request: Request, response: Response) {
    response.status(200).json(await ProdutoSchema.find({}));
  }


  async cadastrar(request: Request, response: Response) {
    const novoProduto = await ProdutoSchema.create(request.body);
    response.status(201).json(novoProduto);
  }
}

export { ProdutoController };
