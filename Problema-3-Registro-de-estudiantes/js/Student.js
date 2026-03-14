export class Student {
    constructor(name, score) {
        this.name = name
        this.score = score
    }

    validateNote() {
        if(this.name = this.name) {
            if(this.score >= 3) {
                return `El estudiante ${this.name} aprobo.`
            } else {
                return `El estudiante ${this.name} reprobo.`
            }
        } else {
            alert("Debe registrar primero un estudiante.")
        }
    }
}