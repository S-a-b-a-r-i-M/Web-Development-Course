
//let prime=new Array();
let prime=[];
prime[0]=3;
prime[1]=5;
prime[2]=7;
//INDEX 3,4 BECOME UNDEFINED
prime[5]=15;

// for(let val of prime)
//     console.log(val);
/*
console.log("pushing 11 " + prime.push(11));
console.log(prime);
prime.push(13);
//PUSHING OMRE THAN ONE ELE USING PUSH METHOD()
prime[prime.length]=17;
prime.push(19,23,29);

console.log(prime+'\n'+'typeof : ');
console.log(typeof prime);
console.log("Length of the Array is :" + prime.length);
console.log("Out of range :"+prime[-1]);    */

//POP
console.log(prime);
prime.pop();
console.log(prime.pop());
console.log(prime);

//SHIFT -- UNSHIFT
console.log("--------- USING SHIFT & UNSHIFT ---------");
prime.shift(); // REMOVING 3
prime.shift(); // REMOVING 5
console.log(prime);
prime.unshift(5);
console.log(prime);

//ITERATION
console.log("Elements of the array")
for(let ele of prime)
{
    console.log(ele);
}

// for(let ele in prime) // THE FOR-IN LOOP ITERATES THE INDEX VALUES OF THIS ARRAY
// {
//     console.log(prime[ele]);
// }

//MIX TYPE ARRAY
/*let data=['sabari', 21, {degree:'B.Sc Degree'}, 
          function(){console.log('im the function in the array')}];

console.log('\n' + data + '\n');
data[data.length-1]();//CALLING FUNCTION INSIDE THE ARRAY   */


console.log("\n--------- Destructuring ---------");
//ARRAY DESTRUCTING
const fibo=[1,1,2,3,5,8,12];
let [a,b,c,d]=fibo;

console.log(a,b,c,d);

let [w,,,z] =fibo;
console.log(w,z);

[a,b,...c]=fibo;
console.log("Using rest... "+a+" "+b+"  "+c);
console.log(typeof a,typeof c);
//SWAPPING
let num1=10, num2=20;
console.log("\nbefore swapping  a:"+num1+" b:"+num2 );
[num1,num2]=[num2,num1];
console.log(" after swapping  a:"+num1+" b:"+num2 +'\n');

//SPLIT() METHOD
let words="My name is Sabari".split(' ');
console.log(words);
console.log(words[2]); 

//FOREACH() 
console.log("-------- forEach ---------");
let arr=[10,20.2,30,40.4,50,60.6,"sabari"];

arr.forEach(function(ele){
    console.log(ele);
});

console.log("\nVal Idx");
arr=[1,2,3,4,5,6];
arr.forEach((val, index) =>{
    console.log(" "+val+"  "+index);
}); 

//FILTER() 
console.log("Odd numbers using filter()");
const odd_arr=arr.filter(n => n%2==1);
console.log(odd_arr);

console.log("Even numbers");
const even_arr=arr.filter(n => n%2!=1);
console.log(even_arr);

//MAP()
console.log("\nSquare values using map()");
arr.map( num => (num*num))
   .forEach((num,idx) => {
        console.log(idx+"\t"+num);
   });

console.log(arr);

//REUECE()
console.log("Total sum");
let sum=arr.reduceRight((a,b) => {  //AARAY REDUCERIGHT IS CALL FROM DESCENDING ORDER  
    console.log("a:"+a+" b:"+b);
    return a+b }
    );
console.log("\nsum : ",sum);




