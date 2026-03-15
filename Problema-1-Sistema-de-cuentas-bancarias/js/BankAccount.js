export class BankAccount {
    constructor(person, balance = 0) {
        this.person = person;
        this.balance = balance;
    }

    checkBalance() {
        return {
            success: true,
            message: `Titular: ${this.person.getName()} | Cuenta: ${this.person.getAccountNumber()} | Saldo: $${this.balance}`,
            data: { balance: this.balance, owner: this.person.getName() }
        };
    }

    deposit(amount) {
        if (isNaN(amount) || amount <= 0) {
            return { success: false, message: "Ingresa un monto válido mayor a 0" };
        }

        this.balance += amount;

        return {
            success: true,
            message: `Depósito de $${amount} realizado. Saldo actual: $${this.balance}`,
            data: { balance: this.balance }
        };
    }

    withdrawMoney(amount) {
        if (isNaN(amount) || amount <= 0) {
            return { success: false, message: "Ingresa un monto válido mayor a 0" };
        }

        if (amount > this.balance) {
            return {
                success: false,
                message: `Fondos insuficientes. Saldo disponible: $${this.balance}`
            };
        }

        this.balance -= amount;

        return {
            success: true,
            message: `Retiro de $${amount} realizado. Saldo restante: $${this.balance}`,
            data: { balance: this.balance }
        };
    }
}