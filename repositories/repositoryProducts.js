import { Product } from "../models/Product.js";

export class ProductList{
    #productDao
    constructor( producDao ){
        this.#productDao = producDao
    }
    async list(){
        const productsDto = await this.#productDao.getObjects()
        return productsDto.map( dto => new Product(dto) )
    }
    async getProductByField( field, value ){
        const productDto = await this.#productDao.getObjectByField( field, value )
        return new Product( productDto )
    }
    async add( product ){// recibe por parametro una instancia de la clase Producto
        const productDto = product.dto()
        await this.#productDao.saveObject( productDto )
    }
    async updateById( product ){// recibe por parametro una instancia de la clase Producto
        const productDto = product.dto() // objeto de producto con id incluido
        await this.#productDao.updateObject( productDto )
    }
    async deleteById( idProduct ){
        await this.#productDao.deleteObject( idProduct )
    }
}