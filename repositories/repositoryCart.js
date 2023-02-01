import { Cart } from "../models/Cart.js";

export class CartList{
    #cartDao
    constructor( cartDao ){
        this.#cartDao = cartDao
    }
    async create( cart ){
        const cartDto = cart.dto()
        await this.#cartDao.saveObject( cartDto )
        return cartDto.id
    }
    async empty( id ){
        await this.#cartDao.updateObject({ id, products: [] })
    }
    async verifyExistenceProductInCart( idClient, idProduct ){
        const cartDto = await this.#cartDao.getObjectByField( id, idClient )
        return cartDto.products.includes( idProduct ) && new Cart( cartDto )
    }
}