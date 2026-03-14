import { Account } from "./Account.js";

let cuenta = null;

const btnRegister = document.getElementById("btnRegister");
const btnDeposit = document.getElementById("btnDeposit");
const btnWithdraw = document.getElementById("btnwithdrawBalance");
const btnConsult = document.getElementById("btnConsult");

btnRegister.addEventListener("click", registrarCuenta);
btnDeposit.addEventListener("click", depositar);
btnWithdraw.addEventListener("click", retirar);
btnConsult.addEventListener("click", consultarSaldo);

function registrarCuenta(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const accountNumber = document.getElementById("accountNumber").value;

    cuenta = new Account(name, accountNumber);

    alert(`Cuenta registrada para ${name}`);
}

function depositar() {

    if (!cuenta) {
        alert("Primero debes registrar una cuenta");
        return;
    }

    const amount = parseFloat(document.getElementById("deposit").value);

    cuenta.deposit(amount);

    document.getElementById("deposit").innerHTML = `Depósito realizado: $${amount}`;
}

function retirar() {

    if (!cuenta) {
        alert("Primero debes registrar una cuenta");
        return;
    }

    const amount = parseFloat(document.getElementById("withdraw").value);

    if (cuenta.withdraw(amount)) {
        document.getElementById("withdrawMoney").innerHTML = `Retiro realizado: $${amount}`;
    } else {
        document.getElementById("withdrawMoney").innerHTML = `Fondos insuficientes`;
    }
}

function consultarSaldo() {

    if (!cuenta) {
        alert("Primero debes registrar una cuenta");
        return;
    }

    document.getElementById("consult").innerHTML = `Saldo actual: $${cuenta.balance}`;
}