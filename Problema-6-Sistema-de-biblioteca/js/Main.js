import { Book } from "./Book.js";

const books = []

const titleInput = document.getElementById("title")
const authorInput = document.getElementById("author")
const addBookBtn = document.getElementById("addBook")
const bookList = document.getElementById("bookList")

addBookBtn.addEventListener("click", () => {

    const title = titleInput.value
    const author = authorInput.value

    if(title === "" || author === "") return

    const book = new Book(title, author)

    books.push(book)

    renderBook(book)

    titleInput.value = ""
    authorInput.value = ""
})

function renderBook(book) {

    const div = document.createElement("div")

    const title = document.createElement("h4")
    title.textContent = book.title

    const author = document.createElement("p")
    author.textContent = "Libro: " + book.name

    const status = document.createElement("p")
    status.textContent = "Estado: Disponible"

    const borrowBtn = document.createElement("button")
    borrowBtn.textContent = "Prestar"

    const returnBtn = document.createElement("button")
    returnBtn.textContent = "Devolver"

    borrowBtn.addEventListener("click", () => {
        book.borrow()
        status.textContent = "Estado: No disponible"
    })

    returnBtn.addEventListener("click", () => {
        book.returnBook()
        status.textContent = "Estado: Disponible"
    })

    div.appendChild(title)
    div.appendChild(author)
    div.appendChild(status)
    div.appendChild(borrowBtn)
    div.appendChild(returnBtn)

    bookList.appendChild(div)
}