export class Person {
    #name
    #accountNumber

    constructor(name, accountNumber) {
        this.#name = name
        this.#accountNumber = accountNumber
    }

    getName() {
        return this.#name
    }

    getAccountNumber() {
        return this.#accountNumber
    }
}