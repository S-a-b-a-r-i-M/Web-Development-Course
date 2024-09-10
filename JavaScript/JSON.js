let obj1=[
    {
    brand:'VGuard',
    type:"Electricals"
    },
    {
        brand:"TATA Motors",
        type:"Cars"
    },
    {
        brand:"Lenova",
        type:"Laptop"
    }
];

console.log(obj1);
console.log("\nType of ->",typeof(obj1));

// console.log("\n--------OBJCET TO JSON -----");
let json2=JSON.stringify(obj1);
console.log(json2);

//STING TO OBJECT
console.log("\n--------JSON TO OBJCET-----");
let obj2=JSON.parse(json2);
console.log(obj2);