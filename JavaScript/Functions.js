/*
function greetings()
{
    console.log("Hello World");
}

greetings();

function sum(x,y)
{
    var s= x+y;
    return s;
}

let add=sum(10,20);
console.log("sum is",add);
*/

// Question: if it'll executes line by line i called welcome("sabari") function before defining it , how js executes it without throwing any error?
// Answer: In JavaScript, this behavior is possible due to a mechanism called Hoisting.etc...
/*
welcome("sabari");
function welcome(user)
{
    console.log(`Hello ${user}`);
}

greet('Galaxy') //but this won't work
const greet =  function (user) {
                console.log(`Hello ${user}`)
            }
greet('Universe')  // it'll work
*/

/*
//DEFAULT ARGUMENTS
num = readLine()
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
            console.log("Welcome to JS world!!!");
         }

fun('Sabari');
var fun1 = fun
var fun2 = fun1
console.log(fun1, fun2,'\n');

//ARROW FUNCTION
let greet = (name,profession="Advocate") => 
            {
                console.log(`${name} is a ${profession}`);
            }

greet("Sabari","Software Developer")
greet("Nithika");
console.log('\n');

function add(num1,num2)
{
    console.log(Math.abs(num2+num1));
}

add(-10,-1.2);
        */        


//CONSTRUCTOR FUNCTION

function Employee(id, name, salary){
    this.id = +(id)
    this.name = name
    this.salary = parseFloat(salary)

    this.empInfo = function(){
        console.log('         Employee Details             ');
        console.log('--------------------------------------');
        console.log(' id |   name   |  salary  ');
        console.log(`${this.id}       ${this.name}       ${this.salary}`);
    }
}

let emp1= new Employee(1, 'sabari', 35000)
let emp2= new Employee('2', 'arasu', 30000)
let emp3= new Employee(3, 'saran', 25000)

console.log(emp1, emp2, emp3)
console.log(emp1.empInfo());

//INNER FUNCTIONS
/*
function outer(name)
{
    function inner()
    {
       console.log("hello",name);
    }
    return inner;
}

let innerFun=outer("sabari");

innerFun();
*/




















