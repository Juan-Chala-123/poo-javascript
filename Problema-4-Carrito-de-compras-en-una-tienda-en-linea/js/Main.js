import { Cart } from "./Cart.js";
import { Product } from "./Product.js";

const arroz = new Product("Arroz", 2000, 1);
const arbeja = new Product("Arbeja", 2300, 2);
const lentejas = new Product("Lentejas", 2100, 3);
const harinaPan = new Product("Harina Pan", 2000, 4);

const catalog = [arroz, arbeja, lentejas, harinaPan];
const carts = new Cart();

const container = document.getElementById("cartItem");
const totalContainer = document.createElement("p");

function showCatalog() {

    const container = document.getElementById("catalog");

    catalog.forEach(product => {

        const item = document.createElement("li");

        item.textContent = `${product.name} - $${product.price}`;

        const button = document.createElement("button");
        button.textContent = "Agregar";

        button.addEventListener("click", () => {
            carts.addProduct(product);
            showCart();
        });

        item.appendChild(button);
        container.appendChild(item);
    });
}

function showCart() {
    container.innerHTML = "";

    carts.products.forEach(product => {

        const button = document.createElement("button")
        button.textContent = "Eliminar"

        button.addEventListener("click", () => {
            carts.removeProduct(product.id)
            showCart();
        })

        const item = document.createElement("li");

        item.textContent = `${product.name} | $${product.price}`;
        item.appendChild(button);
        container.appendChild(item);
    });

    totalContainer.textContent = `Total: ${carts.valueTotal()}`
    const container1 = document.getElementById("valueTotal")
    container1.appendChild(totalContainer)
}

showCatalog();