
//let prime=new Array();
let prime=[];
prime[0]=3;
prime[1]=5;
prime[2]=7;
prime.push(11);
prime.push(13);
prime[prime.length]=17;

console.log(typeof prime);
console.log(prime);
console.log(" Length of the Array is :" + prime.length);
console.log("Out of range :"+prime[-1]);

for(let ele in prime)
{
    console.log(ele);
}