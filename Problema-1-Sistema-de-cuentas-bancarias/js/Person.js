export class Person {
    constructor(name, accountNumber) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    getName() {
        return this.name;
    }

    getAccountNumber() {
        return this.accountNumber;
    }

    static validate(name, accountNumber) {
        if (!name || !name.trim()) {
            return { success: false, message: "El nombre es obligatorio" };
        }

        if (!accountNumber || !String(accountNumber).trim()) {
            return { success: false, message: "El número de cuenta es obligatorio" };
        }

        return { success: true, message: "Datos válidos" };
    }
}