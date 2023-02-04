import { Router } from "express"

import { 
    listProductsController,
    listProductByIdController,
    addProductController,
    updateProductController,
    deleteProductController
} from "../controllers/productController.js"
import { checkAdmin } from "../middlewares/adminCheck.js"

const products = new Router()

// controllers

products.get("/", listProductsController) // listar productos

products.get("/:id_product", listProductByIdController) //listar producto por id

products.post("/", checkAdmin ,addProductController) // solo admin, añadir producto

products.put("/:id_product", checkAdmin ,updateProductController) // solo admin, actualiza producto por id

products.delete("/:id_product", checkAdmin ,deleteProductController) // solo admin, borra producto por id

export default products