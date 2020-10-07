//parent class
class Vehicle{
 //constructor vaiables
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    information(){
         console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);

   }
}
//cars class inheriting from vehicle class
class  Cars extends Vehicle {
    //arguments
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors = doors;

    }
    //
    information(){
        //ivoking methord use super
        super.information();
        console.log(`Doors: ${this.doors}`);

    }
}
// variable
let myCar = new Cars('Vw', 'Jetta', 2015, 5);
//methord
myCar.information();

//let myVehicle = new Vehicle('VW', 'Gold', 2008);
//let info = myVehicle.information();

    

    
