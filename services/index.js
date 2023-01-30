import { productList } from "../repositories/index.js";
import { Products } from "./ProductService.js";

export const productManager = new Products( productList );