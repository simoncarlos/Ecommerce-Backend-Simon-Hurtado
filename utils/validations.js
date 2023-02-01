export function requiredField( field, name, className ){
    if(!field) throw new Error(`Se requiere el campo '${name}' para instanciar la clase ${className}`)
    return field
}