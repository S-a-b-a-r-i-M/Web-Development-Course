let json1=[
    {
    'brand':'VGuard',
    "type":"Electricals"
    },
    {
        "brand":"TATA Motors",
        "type":"Cars"
    },
    {
        "brand":"Lenova",
        "type":"Laptop"
    }
];

console.log(json1);
console.log("-----OBJECT TO STRING-----");
console.log("\nIndex -> ",json1[1]);
console.log("\nType of ->",typeof(json1));

//OBJECT TO STRINGS
let json2=JSON.stringify(json1);
console.log(json2);
console.log(json2[10]);

//STING TO OBJECT
console.log("\n--------STRING TO OBJCET-----");
let json3=JSON.parse(json2);
console.log(json3);