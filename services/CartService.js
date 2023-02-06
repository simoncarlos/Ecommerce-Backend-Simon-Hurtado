import { Cart } from "../models/Cart.js"

export class Carts{
    #cartList
    #productList
    constructor(cartList, productList){
        this.#cartList = cartList
        this.#productList = productList
    }
    async createCart( idClient ){ // not use
        const cartInstance = new Cart({ id: idClient, products: [] })
        console.log("Carrito creado exitosamente")
        return await this.#cartList.create( cartInstance )
    }
    async emptyCart( idClient ){
        await this.#cartList.empty( idClient )
    }
    async addProductAtCart( idClient, idProduct ){
        await this.#productList.getProductByField( "id", idProduct ) // verificacion de existencia de producto
        await this.#cartList.addProduct( idClient, idProduct ) 
    }
    async getProductsAtCart( idClient ){
        const cart = await this.#cartList.getCart( idClient )
        const productsIds = cart.dto().products.map( product => product.id )
        const products = await this.#productList.getProductsByIds( productsIds )
        return products.map( product => product.dto() )
    }
    async deleteProduct( idClient, idProduct ){
        await this.#productList.getProductByField( "id", idProduct ) // verificacion de existencia de producto
        await this.#cartList.deleteProduct( idClient, idProduct )
    }
}