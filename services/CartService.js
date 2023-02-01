import { Cart } from "../models/Cart.js"

export class Carts{
    #cartList
    #productList
    constructor(cartList){
        this.#cartList = cartList
    }
    async createCart( idClient ){
        const cartInstance = new Cart({ id: idClient, products: [] })
        return await this.#cartList.create( cartInstance )
    }
    async emptyCart( idClient ){
        await this.#cartList.empty( idClient )
    }
    async addProductAtCart( idClient, idProduct ){
        const productInstance = await this.#productList.verifyExistence( "id", idProduct )
        //const productId = productInstance.dto().id
        const cartInstance = await this.#cartList.verifyExistenceProductInCart(idClient, idProduct) 
        // carrito con id y products
        if( cartInstance ){
            const cartDto = cartInstance.dto().products // se puede hacer un map

        }
        // verificamos si existe o no en el carrito
        // si existe se incrementa su cantidad
        // sino se agrega normalmente con cantidad 1

    }
}