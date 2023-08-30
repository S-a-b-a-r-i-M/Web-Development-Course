/*
//IF STATEMENTS
let num=0;
if(num==0)
    console.log("Num is 0", '\n');

//IF...ELSE
num=22;
if(num%2==0)
    console.log(num,"is a even number", '\n');
else
    console.log(num,"is a odd number", '\n');

//IF..ELSE IF..ELSE
let a=10;
let b=20;
let c=20.01;
if(a>b && a>c)
    console.log("a is greater than b and c");
else if(b>c)
    console.log("b is greater then a and c");
else
    console.log("c is greater than a and b");
console.log('\n');

//TERNARY OPERATOR
let res=(15<10)?"true":false;
console.log(res, typeof res,'\n');

//SWITCH SATEMENT
let day="tuesday";
switch(day)
{
    case "monday":
        console.log("Frist day to the work in this week")
        break;
    case "friday":
        console.log("Last day to the work in this week");
        break;
    case "saturday":
    case "sunday":
    console.log("it's weekend!!!!")
        break;
    default:
        console.log("it's a usual day");
}

*/

console.log("PRIME NUMBERS");
for(let i=2; i<25; ++i)
{
    let temp=0;
    for(let j=2; j<=Math.sqrt(i); ++j)
    {
        if(i%j==0)
        {
            temp=1;
            break;
        }
    }
    if(temp==0)
        console.log(i);
}
console.log();

let num1=531248;
let num=num1;
let num2=0;

while(num1>0)
{
    let reminder=num1%10;
    num2=(num2*10)+reminder;
    num1=parseInt(num1/10);
}

console.log(`Reverse order of ${num} is ${num2}`);





















































