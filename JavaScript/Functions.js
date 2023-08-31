/*
function greetings()
{
    console.log("Hello World");
}

greetings();

function welcome(user)
{
    console.log(`Hello ${user}`);
}

welcome("sabari");

function sum(x,y)
{
    s=x+y;
    return s;
}

let add=sum(10,20);
console.log("sum is",add);
*/

//DEFAULT ARGUMENTS
/*
function sum(num1=0,num2=0,num3=0)
{
    return num1+num2+num3;
}

console.log(sum(10,7,8));
console.log(sum(10,5));
console.log(sum(7));
console.log(sum,'\n');

//FUNCTION AS A EXPRESSION
let fun= function(user)
         {
            console.log("Hello "+user);
            console.log("Welcome to JS world!!! \n");
         }

fun('Sabari');

//ARROW FUNCTION
let greet = (name,profession="Advocate") => 
            {
                console.log(`${name} is a ${profession}`);
            }

greet("Sabari","Software Developer")
greet("Nithika");


function add(num1,num2)
{
    console.log(Math.abs(num2)+Math.abs(num1));
}

add(-10,-1.2);
                */


//CONSTRUCTOR FUNCTION
function Person(name, gender, age)
{
    this.name=name;
    this.gender=gender;
    this.age=age;

    this.print= function(){
        console.log(`${this.name} is a ${this.gender} and he/she is ${this.age} years old \n`);
    }
}

let obj1=new Person('sabari','male',21);
let obj2=new Person('nithika','female',11);

console.log(obj1,'\n');
console.log(obj2);

obj1.print();
obj2.print();

obj2.age=12;
obj2.print();
console.log(obj2);




















