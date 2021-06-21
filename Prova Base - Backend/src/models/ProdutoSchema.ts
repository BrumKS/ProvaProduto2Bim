import { model, Schema } from "mongoose";

const produtoSchema = new Schema(
  {
    nome: {
      type: String,
      required: [true, "O campo NOME é obrigatório!"],
    },
    codigoBarras: {
      type: String,
      required: [true, "O campo CODIGO DE BARRAS é obrigatório!"],
    },
    preco: {
      type: Number,
      required: [true, "O campo PREÇO é obrigatório!"],
    },
  },
  {
    timestamps: true,
  }
);

export default model("produto", produtoSchema);
