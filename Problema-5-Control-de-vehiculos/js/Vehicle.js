export class Vehicle {
    constructor(id) {
        this.id = id;
        this.speed = 0;
    }

    accelerate(){
        this.speed += 10;
    }

    brake(){
        this.speed -= 10;
        if(this.speed < 0) {
            this.speed = 0;
        }
    }
}