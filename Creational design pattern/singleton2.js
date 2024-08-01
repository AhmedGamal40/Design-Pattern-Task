// 1 - creational Desing Pattern => b - singleton Desing Pattern (used when object)
// EX (2) :

// let instance = null
class ShoppCart{
    constructor(){
        // instance == null Or ShoppCart.instance
        // in this case ShoppCart.instance must delete let instance = null in logic

        // ************************************************************ //
        // Case instance
        // if(instance == null){
        //     instance = this
        //     this.products = []
        // }else{
        //     return instance
        // }

        // ************************************************************ //
        // Case ShoppCart.instance
        if(ShoppCart.instance){
            return ShoppCart.instance
        }else {
            ShoppCart.instance = this,
            this.products = []
        }
    }
    addProduct(product){
        this.products.push(product)
        console.log(`Add New Product ${product}`)
    }
    getProducts(){
        return this.products
    }
}

const cart1 = new ShoppCart()
cart1.addProduct('Phone')
// console.log(cart1.getProducts())

const cart2 = new ShoppCart()
cart2.addProduct('TV')
// console.log(cart2.getProducts())

const cart3 = new ShoppCart()
cart2.addProduct('Labtob')
console.log(cart2.getProducts())