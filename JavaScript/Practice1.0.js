/*
let ninja={
    name:'Naruto',
    clan:'uzumaki',
    fightCapacity:() => {
        console.log("He can defeat 10 shinobis at once");
    }
}

let key='name';
console.log(ninja[key]);

ninja.fightCapacity();

console.log(Object.keys(ninja));

console.log("\n\n\n");
*/

//FIND A NUMBER IS ABUNDANT NUMBER OR NOT
/*let num=22;
let sum=1;
for(let i=2; i<=num/2; ++i)
{
    if(num%i == 0)
    {
        sum+=i;
        //console.log(sum+" "+i);
    }
}

console.log((sum>num) ? "Given Number is a Abundant Numaber\n" : "Given Number is not a Abundant Number\n");    */

//STRING PALINDROME
/*let word="AdeaDa";
word=word.toLowerCase();
for(let i=0,j=word.length-1; i<j; ++i,--j)
{
    if(word.charAt(i) != word.charAt(j))
    {
        console.log(word," word is not a palindrome");
        return;
    }
}

console.log(word,"word is palindrome"); */

//ARRAY MAP
let arr=[11,22,33,44,55];

arr.forEach((val,idx) =>{
    console.log("["+idx+"] "+val);
});

console.log(arr);

var map = function(arr, fn) {
    arr.forEach( (val,idx,arr) => {
        arr[idx]=fn(val,idx,arr);
    });
};

map(arr,function plusone(n) { return n + 1; });
console.log(arr);

let sum= (num1,num2,num3) => {
    console.log("im the arrow sum function");
};

sum(1,2,3,4,5);
