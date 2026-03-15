import { BankAccount } from "./BankAccount.js";
import { Person } from "./Person.js";

let cuenta = null;

const btnRegister = document.getElementById("btnRegister");
const btnDeposit = document.getElementById("btnDeposit");
const btnWithdraw = document.getElementById("btnwithdrawBalance");
const btnConsult = document.getElementById("btnConsult");

btnRegister.addEventListener("click", registrarCuenta);
btnDeposit.addEventListener("click", depositar);
btnWithdraw.addEventListener("click", retirar);
btnConsult.addEventListener("click", consultarSaldo);

function showResult(elementId, result) {
    const el = document.getElementById(elementId);
    el.textContent = result.message;
    el.className = result.success ? "result success" : "result error";
}

function registrarCuenta(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const accountNumber = document.getElementById("accountNumber").value;

    const validation = Person.validate(name, accountNumber);

    if (!validation.success) {
        alert(validation.message);
        return;
    }

    const person = new Person(name, accountNumber);
    cuenta = new BankAccount(person);

    alert(`Cuenta registrada para ${person.getName()}`);
}

function depositar() {
    if (!cuenta) {
        alert("Primero debes registrar una cuenta");
        return;
    }

    const amount = parseFloat(document.getElementById("depositInput").value);
    const result = cuenta.deposit(amount);
    showResult("depositResult", result);
}

function retirar() {
    if (!cuenta) {
        alert("Primero debes registrar una cuenta");
        return;
    }

    const amount = parseFloat(document.getElementById("withdraw").value);
    const result = cuenta.withdrawMoney(amount);
    showResult("withdrawMoney", result);
}

function consultarSaldo() {
    if (!cuenta) {
        alert("Primero debes registrar una cuenta");
        return;
    }

    const result = cuenta.checkBalance();
    showResult("consult", result);
}