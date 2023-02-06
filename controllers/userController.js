import { ecommerce } from "../services/index.js"

export const userSuccessfulController = async (req, res, next) => {
    req.session.username = req.body.username
    const user = await ecommerce.getUserByName(req.body.username)
    console.log("Usuario y carrito creados exitosamente")
    // await twillo.send(req), aca se envia confirmacion de mail al admin con el nuevo registro
    res.json({id: user.id})
}

export const userFailController = (req, res, next) => {
    res.sendStatus(400)
}