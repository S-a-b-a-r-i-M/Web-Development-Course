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