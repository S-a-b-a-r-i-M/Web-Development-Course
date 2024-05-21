var num1=10;
var num2=12.2;

var result=num1+num2;
console.log(num1 + " + " + num2 + " = " + result);

//TEMPLATE LITERAL -- ${}
console.log(`The addition of ${num1} and ${num2} is ${result}`);

/* console.log(`we dont have to use 
 \\n for new line
 whatever in this backticks ,will print as it is
 ..............`);*/

 //RECURSION
/*
 function factorial(num)
 {
    let fact;
    if(num==0)
        return 1;
    else
        fact=num * factorial(num-1);

    return fact;
 }

 console.log("Factorial of 6 :",factorial(6));

*/

let arr=[10,20,30,40];
sum(arr);

function sum(arr){
    let res=0;
    console.log(typeof(res));
    for(let val of arr)
        res+=val;

    console.log(res);
}

let res=0;
let tot=arr.forEach(
    (val)=>{
        res+=val;    
    });
//ONLY ONE ARGUMENT AND ONE BODY STATEMENT ,THEREFORE NO NEED FOR -> {}
let area= r => 3.14*Math.pow(r,2);

console.log("Area of a circle : ",area(7));





