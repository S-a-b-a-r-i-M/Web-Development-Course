//OBJECT LITERAL
let human={
   name:'sabari',
   age:21,
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
//console.log(human);

//USED TO RETRIEVE AN ARRAY OF OBJECT'S KEYS
console.log('\nKeys :'+Object.keys(software_dev)+"\n");

//USED TO RETRIEVE AN ARRAY OF OBJECT'S VALUES
console.log("Values :" + Object.values(software_dev)+'\n');

//USED TO RETRIEVE AN ARRAY OF OBJECT'S ENTRIES
console.log(Object.entries(software_dev)+'\n');

//METHOD IN OBJECT
let dog={
    name:'Tornado',
    color:'Brown',
    sound: function(){
        console.log("VowVow...Vow!!! \n")
    }
}

dog.sound();
 
let cat={
    name:"poona",
    color:"white with blue",
    sound: () => {
        console.log("MeowMeow...Meow*** \n")
    }
}

cat.sound();


//THIS KEYWORD
let laptop={
    cpu:'AMD',
    ram:8,
    brand:undefined,

    setBrand: function(brand){
        this.brand=brand;
    }
}
/*
console.log(laptop);
console.log("\nAfter set brand");
laptop.setBrand("Dell");
console.log(laptop);*/


let mobile1={
    ram:8,
    core:4,
    brand:'Vivo',

    compare: function(mobile2){
        if(this.core >= mobile2.core)
            console.log(this.brand+' win '+mobile2.brand);
        else
            console.log("You lost this game");
    },
}

let mobile2={
    ram:4,
    core:4,
    brand:'Redmi',

    compare: (other_mobile) =>
    {
        if(this.ram > other_mobile.ram)
            console.log(this.brand+' win this Mobile '+other_mobile.brand);
        else
            console.log("You lost this game");
    }
}

mobile1.compare(mobile2);




















