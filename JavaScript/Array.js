/*
let prime=new Array();
// let prime=[];
prime[0]=3;
prime[1]=5;
prime[2]=7;
//INDEX 3,4 BECOME UNDEFINED
prime[5]=15;

console.log(prime);

//PUSH
console.log("pushing 11 " + prime.push(11));
console.log(prime);
prime.push(13);
//PUSHING MORE THAN ONE ELE USING PUSH METHOD()
prime[prime.length]=17;
prime.push(19,23,29);

console.log('typeof : ',typeof prime);
console.log("Length of the Array is :" + prime.length, prime);
console.log("Out of range :"+prime[-1]);    

//POP
prime.pop();
console.log(prime.pop());
console.log(prime);

//SHIFT -- UNSHIFT
console.log("--------- USING SHIFT & UNSHIFT ---------");
prime.shift(); // REMOVING 3
prime.shift(); // REMOVING 5
console.log(prime);
prime.unshift(6);
console.log(prime);

//ITERATION
console.log("Elements of the array")
for(let ele of prime)
{
    console.log(ele);
}

for(let ele in prime) // THE FOR-IN LOOP ITERATES THE INDEX VALUES OF THIS ARRAY
{
    console.log(prime[ele]);
}

*/


//MIX TYPE ARRAY
/*
let data=['sabari', 21, {degree:'B.Sc Degree'}, 
          function(){console.log('im the function in the array')},
          new Set([1,1,1,2,2,3]),
        ];

console.log('\n' + data + '\n');
data[data.length-2]();//CALLING FUNCTION INSIDE THE ARRAY  
*/


//ARRAY DESTRUCTING
/*
console.log("\n--------- Destructuring ---------");
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
*/    

//ARRAY FUNCTIONS
/*
let arr=[10,20.2,31,40.4,50,60.6];
    //FILTER() 
console.log('--------FILTER FUNCTION---------');
console.log("Odd numbers using filter()");
const odd_arr=arr.filter(n => n%2==1);
console.log(odd_arr);

console.log("Even numbers");
const even_arr=arr.filter(n => n%2!=1);
console.log(even_arr);  

    //MAP()
console.log('--------MAP FUNCTION---------');
console.log("\nSquare values using map()");
arr.map( num => (num*num))
   .forEach((num,idx) => {
        console.log(idx+"\t"+num);
   });

console.log(arr);

let obj_arr=[
                {name:"sabari",age:21},
                {name:"nithika",age:12},
                {name:"chithra",age:43},
                {name:"Murugan",age:45}
            ]

let names=obj_arr.map((obj) => {
    return obj.name;
});

let ages=obj_arr.map((obj) => obj.age );

console.log(names,"\n",ages);

    //REDUCE()
console.log('--------REDUCE FUNCTION---------');
console.log("Total sum");
let sum=arr.reduceRight((accumulator, val) => {  //ARRAY REDUCERIGHT IS CALL FROM DESCENDING ORDER  
    console.log("accumulator:"+accumulator+" current val:"+val);
    return accumulator+val
});
console.log("\nsum : ",sum);
*/

//FINDING FREQUENCY

console.log("-------FREQUENCY---------");
let alpha=['a','b','b','c','c','d','e','a','c','c'];
let obj={}

alpha.forEach((val)=>{
    if(obj[val]==undefined)//NO PAIR, THE CREATE ONE
        obj[val]=1;
    else//IF PAIR IS EXIST, THEN INCREMENT ITS FREQUENCY(VALUE)
        obj[val]=obj[val]+1;
});

console.log(obj);


let nums = [2,3,5,-6,8,-10,0]

nums.filter( n => n > 0)
    .map( n => n*n*n)
    .forEach( n => {console.log(n);})






