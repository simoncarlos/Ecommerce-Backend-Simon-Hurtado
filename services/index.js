import { cartList, productList } from "../repositories/index.js";
import { Carts } from "./CartService.js";
import { Products } from "./ProductService.js";

export const productManager = new Products( productList )
export const cartManager = new Carts( cartList, productList )