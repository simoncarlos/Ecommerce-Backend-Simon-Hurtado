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
    async getCart( idClient ){
        const cartDto = await this.#cartDao.getObjectByField( "id", idClient )
        return new Cart(cartDto)
    }
    async addProduct( idClient, idProduct ){
        const cartDto = await this.#cartDao.getObjectByField( "id", idClient )
        const cartProducts = cartDto.products.map( dto => dto.id )
        if( cartProducts.includes( idProduct ) ){
            cartDto.products = cartDto.products.map( product => {
                return product.id === idProduct ? { ...product, quantity: ++product.quantity } : product     
            })
        }else{
            cartDto.products.push( { id: idProduct, quantity: 1 } )
        }
        await this.#cartDao.updateObject( cartDto );
    }
    async deleteProduct( idClient, idProduct ){
        const cartDto = await this.#cartDao.getObjectByField( "id", idClient )
        const newCartProducts = cartDto.products.filter( product => product.id !== idProduct )
        await this.#cartDao.updateObject({ id: idClient, products: newCartProducts })
    }
}