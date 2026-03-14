export class BankAccount {
    constructor(person, balance = 0) {
        this.person = person;
        this.balance = balance;
    }

    checkBalance() {
        return this.balance
    }

    deposit(amount) {
        if (amount <= 0) {
            return "Monto inválido"
        }

        return this.balance += amount
    }

    withdrawMoney(amount) {
        if (amount <= 0) {
            return "Monto inválido"
        }

        if (amount > this.balance) {
            return "Fondos insuficientes"
        }

        return this.balance -= amount
    }
}