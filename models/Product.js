import { requiredField } from "../utils/validations.js"

export class Product {
    #id
    #name
    #description
    #image
    #price
    constructor({id, name, description, image, price}){
        this.#id = requiredField( id, "id", "Product" )
        this.#name = requiredField( name, "name", "Product" )
        this.#description =  requiredField( description, "description", "Product" )
        this.#image =  requiredField( image, "image", "Product" )
        this.#price = requiredField( price, "price", "Product" )
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