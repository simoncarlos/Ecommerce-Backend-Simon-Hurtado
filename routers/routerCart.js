import { Router } from "express"
import { 
    addProductAtCartController,
    deleteCartController, 
    deleteProductAtCartController, 
    getProductsAtCartController
} from "../controllers/cartController.js"
import { requireAuth } from "../middlewares/authorization.js"

const cart = new Router()

// controllers

// cart.post("/", controller) // crea carrito y devuelve id

cart.delete("/:id_cart", requireAuth, deleteCartController) // vacia un carrito - usuario autenticado

cart.post("/:id_cart/products", requireAuth, addProductAtCartController) // añade producto por id que se envia en la request

cart.get("/:id_cart/products", requireAuth, getProductsAtCartController) // lista productos de carrito

cart.delete("/:id_cart/products/:id_product", requireAuth, deleteProductAtCartController) // elimina producto del carrito


export default cart