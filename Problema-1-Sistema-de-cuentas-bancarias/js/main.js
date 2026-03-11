import Person from "./Person.js"
import { BankAccount } from "./BankAccount.js"

let cuenta = []

document.getElementById("btnRegister").addEventListener("click", () => {
    const name = document.getElementById("name").value
    const accountNumber = Number(document.getElementById("accountNumebr").value)
    
    const person = new Person(name, accountNumber)

    const nuevaCuenta = new BankAccount(person, balance)

    cuenta.push(nuevaCuenta)

    alert("Cuenta creada exitosamente")

    document.getElementById("name").value = ""
    document.getElementById("accountNumber").value = ""
})


document.getElementById("btnDeposit").addEventListener("click", (event) => {
    event.preventDefault();

    if (!cuenta) {
        alert("Debes primero crear una cuenta.")
        return
    }
    cuenta.deposit();
});

document.getElementById("btnwithdrawBalance").addEventListener("click", (event) => {
    event.preventDefault();

    if (!cuenta) {
        alert("Debes primero crear una cuenta.")
        return
    }
    cuenta.withdrawMoney();
});

document.getElementById("btnConsult").addEventListener("click", (event) => {
    event.preventDefault();

    if (!cuenta) {
        alert("Debes primero crear una cuenta.")
        return
    }
    cuenta.checkBalance();
});