

class Employee
{
    static numOfUsers=0;
    constructor(id,name,designation)
    {
        //WE HAVE TO USE THE CLASS NAME TO SPECIFY THE STATIC VAIABLE
        Employee.numOfUsers++;
        this.id=id;
        this.name=name;
        this.designation=designation;
    }

    print()
    {
        console.log("id =>",this.id,":name =>",this.name,":designation =>",this.designation);
    }
}

let emp1=new Employee(5,"sabari","MD");
//emp1.print();


function user(name,age,gender)
{
    this.name=name;
    this.age=age;
    this.gender=gender;
}

user.prototype.print=()=>
                {
                  console.log("name =>",this.name);
                }
let user1=new user("sabari",21,"MD");

//WORKING WITH MODULES
import Flight,{totFlights} from './GetAndSetWithModules.js'

let newFlight=new Flight("Deccon",50,2999);
newFlight.takeof();
console.log(newFlight.price);
newFlight.price=6000;
console.log(newFlight.price);
//ACCESSING THE FUNCTION DEFINED INSIDE ANOTHER JS FILE
console.log(totFlights());