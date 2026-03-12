export class Student {
    constructor(name, score) {
        this.name = name
        this.score = score
    }

    validateNote() {
        if(this.score >= 3) {
            return `El estudiante ${this.name} aprobo.`
        } else {
            return `El estudiante ${this.name} reprobo.`
        }
    }
}