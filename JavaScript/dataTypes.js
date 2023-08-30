/*
let num0=5;
let num1=333.9;
let user="sabari\'s";
let goal='software developer';
let bool1=true;
let bool2= 10 > 11.1;
let sum=null;
let mul;

//PRINT THE TYPE OF NUM
console.log(num0 ,"is", typeof num0);
console.log(num1 ,"is", typeof num1);
console.log(user ,"is", typeof user);
console.log(goal ,"is", typeof goal);
console.log(bool1 ,"is", typeof bool1);
console.log(bool2 ,"is", typeof bool2);
console.log(sum ,"is", typeof sum);
console.log(mul,"is",typeof mul);
console.log('\n');

// USES OF + OPERATOR
var x=10;//WE CAN USE VAR OR LET 
var y=20;

let firstName="Sabari";
let lastName="Murugan";

console.log("Addition of two integers :", x+y);
console.log("Concatination of two string :", firstName+lastName ,'\n');

//CONST
const pi=3.14;
//pi=1;
console.log(pi);

//INFINITY
let a=5/0;
let b=-10/0;
let c=Number.MAX_VALUE * 10;

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);*/


//IMPLICIT TYPE CONVERSION
let a;
console.log(a, typeof a);

a=5;
console.log(a, typeof a);

a=String(10);//NUM TO STRING
console.log(a, typeof a);

a=Number(a);//STRING TO NUM
console.log(a, typeof a);

a=!a;//NUM TO BOOL
console.log(a, typeof a);

a=Number(a);//BOOL TO NUM
console.log(a, typeof a);

a=Boolean(10);//NUM TO BOOL
console.log(a, typeof a);

a=Number(a);//BOOL TO NUM
console.log(a, typeof a);

console.log("false to number ",Number(false));
console.log("true to number",Number(true));

let b=15;
b=b+"";
console.log(b, typeof b);

b=b-5;
console.log(b);

b="s";
b=Number(b);
console.log(b, typeof b);

b="10 sachin";
b=parseInt(b);
console.log(b, typeof b);
b=parseFloat(b);
console.log(b, typeof b);






















