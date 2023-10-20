//CLASSES AND OBJECTS
class Bike
{
    //PROPERTIES
    // brand;
    // model;
    // mileage;

    //CONSTRUTOR
    constructor(brand, model, mileage)
    {
        this.brand=brand;
        this.model=model;
        this.mileage=mileage;
    }

    toString()
    {
        console.log('The brand is :',this.brand,',model \''+this.model+"' and it gives",this.mileage,'km mileage per litre \n');
    }
}

let pulsar=new Bike("Bajaj Pulsar",'Pulsar 150',50);
let apache=new Bike('TVS Apache','Apache RTR',45);
let mt=new Bike('Yamaga','MT',40);

pulsar.toString();
apache.toString();
mt.toString();

console.log("------STATIC VARIABLE AND METHOD-----");
//STATIC VARIABLE AND METHOD
/*
class Car
{
    static count_of_cars=0;
    brand;
    price;
    mileage;

    constructor(brand,price,mileage)
    {
        Car.count_of_cars+=1;
        this.brand=brand;
        this.price=price;
        this.mileage=mileage;
    }

    toString()
    {
        console.log('The brand is :',this.brand,',model \''+this.model+"' and it gives",this.mileage,'km mileage per litre \n');
    }

    static getCount()
    {
        return Car.count_of_cars;
    }
}

let nano=new Car('TATA',2_00_000,12);
let hyundai=new Car('Hyundai',4_00_000,9);
let suzuki=new Car('Maruti Suzuki',3_50_000,8.5);

console.log("Total number of cars :",Car.count_of_cars);
console.log("Count using static method",Car.getCount());

//TRYING TO ACCESS STATIC VARIABLES AND METHODS USING INSTACES
console.log("Total number of cars using class instance :",nano.count_of_cars);
//console.log(hyundai.getCount());//ERROR

    */

//METHOD OVERRIDING
console.log("\n-----Mthod Overrinding------");

class Human
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }

    print()
    {
        console.log(`My name is ${this.name} and ${this.age}years old`);
    }
}

class Employee extends Human
{
    constructor(name,age,designation)
    {
        super(name,age);
        this.designation=designation;
    }

    print()
    {
        console.log(`My name is ${this.name} and im working as a ${this.designation}`);       
    }
}

let emp=new Human("sabari",21);
emp.print();