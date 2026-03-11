export class BankAccount {
    #person;
    #balance;

    constructor(person, balance = 0) {
        this.#person = person;
        this.#balance = balance;
    }

    checkBalance() {
        let balanceText = document.createElement("p")
        balanceText.textContent = "Tu saldo actual es: " + this.#balance

        let container = document.getElementById("consult")
        container.innerHTML = "";
        container.appendChild(balanceText);
    }

    withdrawMoney() {
        let amount = Number(document.getElementById("withdraw").value)

        
        if (amount>this.#balance) {
            alert("No cuenta con la cantidad suficiente para retirar")
            return
        }

        if (amount<=0) {
            alert("Monto invalido")
            return
        }
        
        this.#balance -= amount

        let balanceText2 = document.createElement("p")
        balanceText2.textContent = "Saldo actual: " + this.#balance

        let container2 = document.getElementById("withdrawMoney")
        container2.innerHTML = ""
        container2.appendChild(balanceText2)

        document.getElementById("withdraw").value = ""
    }

    deposit() {
        let amount1 = Number(document.getElementById("deposi").value)

        if (amount1<= 0) {
            alert("No es un valor valido")
            return
        }

        this.#balance += amount1;

        let balanceText3 = document.createElement("p")
        balanceText3.textContent = "Saldo actual es: " + this.#balance

        let container3 = document.getElementById("deposit")
        container3.innerHTML = ""
        container3.appendChild(balanceText3)

        document.getElementById("deposi").value = ""
    }
}