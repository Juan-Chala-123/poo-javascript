export class Cart {
    constructor() {
        this.products = []
    }

    addProduct(product) {
        this.products.push(product)
    }

    removeProduct(id) {
        this.products = this.products.filter(product => product.id !== id)
    }

    valueTotal() {
        return this.products.reduce((total, product) => {
            return total + product.price
        }, 0)
    }
}