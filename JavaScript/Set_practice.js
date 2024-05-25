
//DECLARING A SET
let set1=new Set();

set1.add(5);
set1.add(12);
set1.add("Sabari");
set1.add("Justice");
set1.add(9.999);
set1.add(false);

console.log(set1);

//set1.clear();//IT DELETE ALL THE ELEMENTS

//ITERATION
console.log("------- Using For of ------");
for(let ele of set1)
{
    console.log(ele);
}

console.log(set1.has(12));//HAS METHOD
console.log('\n',set1.delete(12));//DELETE METHOD
console.log(set1.has(12));

console.log("\n------- Using ForEach ------");
set1.forEach( function(n){
    console.log(n);
});

//
let set2=new Set(["Consistency","sabari"]);
console.log("\n", set2);
//SIZE PROPERTY
console.log("size of the set :"+set2.size+'\n');

console.log("Keys --> ",set1);
console.log("Values -->",set1.values());



