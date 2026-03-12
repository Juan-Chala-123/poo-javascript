export class Product {
    name
    price
    amount

    constructor(name, price, amount) {
        this.name = name
        this.price = price
        this.amount = amount
    }

    getTotalValue() {
        return this.price * this.amount
    }

    // getInfo() {
    //     return {
    //         name: this.name,
    //         price: this.price,
    //         amount: this.amount
    //     }
    // }
}