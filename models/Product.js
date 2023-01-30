import { requiredField } from "../utils/validations.js"

export class Product {
    #id
    #name
    #description
    #image
    #price
    constructor({id, name, description, image, price}){
        this.#id = requiredField( id, arguments[0].id, "Product" )// verificar que sea numerico
        this.#name = requiredField( name, arguments[0].name, "Product" )
        this.#description =  requiredField( description, arguments[0].description, "Product" )
        this.#image =  requiredField( image, arguments[0].image, "Product" )
        this.#price = requiredField( price, arguments[0].price, "Product" )
    }
    dto(){
        return {
            id: this.#id,// generar el random
            name: this.#name,
            description: this.#description,
            image: this.#image,
            price: this.#price
        }
    }
}