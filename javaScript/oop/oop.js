class Car{
    constructor(color , speed){
        this.color = color;
        this.speed = speed;
    }

    turboOn(){
        console.log("turbo is on!");
    }
}

const car1 = new Car("red" , 120)
car1.turboOn();
//destruct
let {PI} = Math;
console.log(PI);
console.log(PI === Math.PI);