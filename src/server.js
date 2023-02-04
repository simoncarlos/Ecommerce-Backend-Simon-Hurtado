import express from "express"

import cart from "../routers/routerCart.js";
import products from "../routers/routerProducts.js"
import { errorHandler } from "../middlewares/errorHanding.js";

const app = express()

// Middlewares

app.use( express.json() )
app.use( express.urlencoded({ extended: true }) )

// Routers

app.use("/api/products", products)
app.use("/api/shoppingcartproducts", cart)
app.use(errorHandler)
app.all("*", (req, res) => {
    res.send( { error: -2, descripcion: `ruta ${req.url}, metodo ${req.method} no implementada` } )
})

export default app;