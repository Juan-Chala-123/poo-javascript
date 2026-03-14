export class Book {
    constructor(name, author) {
        this.name = name;
        this.author = author;
        this.status = true
    }

    borrow(){
        if(this.status){
            this.status = false;
        }
    }

    returnBook(){
        this.status = true;
    }
}