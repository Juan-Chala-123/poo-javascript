import { Product } from "./Product.js";
import { Inventory } from "./Inventory.js";

const inventario = new Inventory();

// Elementos del DOM
const inventarioList = document.getElementById("inventoryList");
const productForm = document.getElementById("productForm");
const btnConsult = document.getElementById("btnConsult");
btnConsult.addEventListener("click", mostrarInventario);
const valorTotalDiv = document.getElementById("totalValue");

productForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const price = parseFloat(document.getElementById("price").value);
    const amount = parseInt(document.getElementById("amount").value);

    const product = new Product(name, price, amount);

    inventario.addProduct(product);

    mostrarResultado(product);
    // mostrarInventario();
    mostrarTotal();

    productForm.reset();
});

function mostrarResultado(product) {
    const resultadoDiv = document.createElement("p");
    resultadoDiv.textContent = `Producto agregado: ${product.name}`;

    let container = document.getElementById("result")
    container.appendChild(resultadoDiv)
}

function mostrarInventario() {
    inventarioList.innerHTML = "";

    inventario.products.forEach(p => {
        const item = document.createElement("p");
        item.textContent = `${p.name} | $${p.price} | ${p.amount}`;
        inventarioList.appendChild(item);
    });
}

function mostrarTotal() {
    let total = 0;

    inventario.products.forEach(p => {
        total += p.getTotalValue();
    });

    valorTotalDiv.textContent = `$${total}`;
}