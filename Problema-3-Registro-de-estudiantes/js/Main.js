import { Student } from "./Student.js";
import { School } from "./School.js";

const school = new School();

const studentForm = document.getElementById("studentForm")

studentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const score = parseFloat(document.getElementById("score").value);

    const st = new Student(name, score);

    school.addStudent(st);

    mostrarResultado(st);

    studentForm.reset();
});

function mostrarResultado(st) {
    const resultadoDiv = document.createElement("p");
    resultadoDiv.textContent = st.validateNote();

    let container = document.getElementById("result")
    container.appendChild(resultadoDiv)
}