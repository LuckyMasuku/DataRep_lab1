class BMI {
    //constructer
    constructor(hieght, weight) {
        this.hieght = hieght;
        this.weight = weight;

    }
    // BMI calculations
    calculateBMI(){
        let bmi = this.weight/(this.hieght ** 2);
        return bmi;
    }
}
// finding the worked out bmi average
let MyBmi = new  BMI(2,90);
let calculateBMI = MyBmi.calculateBMI();
console.log(calculateBMI);