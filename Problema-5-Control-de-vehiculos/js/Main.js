import { Vehicle } from "./Vehicle.js";

const vehicles = []

const idVehicle = document.getElementById("vehicleId")
const addVehicle = document.getElementById("addVehicle")
const list = document.getElementById("listVehicles")

addVehicle.addEventListener("click", () => {

    const id = idVehicle.value

    if(id === "") return

    const vehicle = new Vehicle(id)

    vehicles.push(vehicle)

    renderVehiculo(vehicle)

    idVehicle.value = ""

})

function renderVehiculo(vehicle){

    const div = document.createElement("div")
    div.classList.add("vehiculo")

    const title = document.createElement("h4")
    title.textContent = "Vehículo " + vehicle.id

    const speed = document.createElement("p")
    speed.textContent = "Velocidad: 0 km/h"

    const btnAccelerate = document.createElement("button")
    btnAccelerate.textContent = "Acelerar"

    const btnBrake = document.createElement("button")
    btnBrake.textContent = "Frenar"

    btnAccelerate.addEventListener("click", () => {
        vehicle.accelerate()
        speed.textContent = "Velocidad: " + vehicle.speed + " km/h"
    })

    btnBrake.addEventListener("click", () => {
        vehicle.brake()
        speed.textContent = "Velocidad: " + vehicle.speed + " km/h"
    })

    div.appendChild(title)
    div.appendChild(speed)
    div.appendChild(btnAccelerate)
    div.appendChild(btnBrake)

    list.appendChild(div)

}