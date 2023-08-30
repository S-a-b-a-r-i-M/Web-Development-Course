//OBJECT LITERAL
let human={
   
};

//console.log(human);
//console.log(`my name is ${human.name} and im ${human['age']} years old.`);

//MOSTLY WE USE THE [] TO FETCH OBJECTS KEY VALUES BY USER INPUT OF KEYS

//OBJECT INSIDE ANOTHER OBJECT
let software_dev = {
    name:"sabari",
    age:21,
    laptop:{
        rom:8,
        brand:"lenova",
        model:2018
    }
};

/* console.log(software_dev);
 console.log();
 console.log(software_dev.laptop);
 console.log();
 console.log("length :"+software_dev.bike.length+'\n');
 

//DELEATE A PROPERTY FROM OBJECT
delete software_dev.bike;
console.log(software_dev.bike?.length + '\n');

delete software_dev;//IT WON'T DELETE THE FULL OBJECT , IT CAN ONLY DELETE THE PROPERTY OF THE OBJECT
console.log(software_dev);
*/

//ITERATE THE OBJECT

/*for(let key in software_dev)
{
    console.log(key, software_dev[key]);
}
console.log();

for(let key in software_dev.laptop)
    console.log(key,software_dev.laptop[key]);*/

let woman={
    name:'nithika',
    age:12,
}
let man={
    name:'sabari',
    age:21,
    profession:"Software Developer",
}
//USED TO MERGE TWO OR MORE OBJECTS INTO A TARGET OBJECT
Object.assign(human,man,woman);
console.log(human);

//USED TO RETRIEVE AN ARRAY OF OBJECT'S KEYS
console.log('\nKeys :'+Object.keys(software_dev)+"\n");

//USED TO RETRIEVE AN ARRAY OF OBJECT'S VALUES
console.log("Values :" + Object.values(software_dev)+'\n');

//USED TO RETRIEVE AN ARRAY OF OBJECT'S ENTRIES
console.log(Object.entries(software_dev)+'\n');


