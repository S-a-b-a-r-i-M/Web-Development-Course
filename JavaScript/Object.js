//OBJECT LITERAL

human={
   h_name:'sabari',
   age:21,
};

//OBJECT DESTRUCTURING
console.log("----------OBJECT DESTRUCTURING-----------");
let {h_name, age: h_age} = human
console.log(h_name, h_age);


// console.log(human);
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
console.log(software_dev.size);
// console.log(software_dev);
// console.log();
// console.log(software_dev.laptop);
// console.log();
// try{
//     console.log("length :"+software_dev.bike.length+'\n');
// }
// catch{
//     console.log('[----error---]');
// }

//DELETE A PROPERTY FROM OBJECT
delete software_dev.bike;
console.log(software_dev.bike?.length + '\n');// it'll print undefined

delete software_dev;//IT WON'T DELETE THE FULL OBJECT , IT CAN ONLY DELETE THE PROPERTY OF THE OBJECT
console.log(software_dev);


//ITERATE THE OBJECT

/*for(let key in software_dev)
{
    console.log(key, software_dev[key]);
}
console.log();

for(let key in software_dev.laptop)
    console.log(key,software_dev.laptop[key]);*/
/*
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
Object.assign(human, man, woman);
//console.log(human);

//USED TO RETRIEVE AN ARRAY OF OBJECT'S KEYS
console.log('\nKeys :'+Object.keys(software_dev)+"\n");

//USED TO RETRIEVE AN ARRAY OF OBJECT'S VALUES
console.log("Values :" + Object.values(software_dev)+'\n');

//USED TO RETRIEVE AN ARRAY OF OBJECT'S ENTRIES
console.log(Object.entries(software_dev)+'\n');
*/

//METHOD IN OBJECT
/*
let dog={
    name:'Tornado',
    color:'Brown',
    sound: function(){
        console.log("VowVow...Vow!!! \n")
    }
}
if(typeof(dog) == 'object')
    dog.sound();
 
let cat={
    name:"poona",
    color:"white with blue",
    sound: () => {
        console.log("MeowMeow...Meow*** \n")
    }
}

cat.sound();
*/

//THIS KEYWORD
/*
let laptop={
    cpu:'AMD',
    ram:8,
    brand:null,

    setBrand(brand){
        this.brand=brand;
    }
}

console.log(laptop);
laptop.setBrand("Dell");
console.log(`\nAfter set brand -> ${laptop} \n`);// here its not working


let mobile1={
    //attributes
    ram:8,
    core:4,
    brand:'Vivo',
    //method
    compare: function(mobile2){
        if(this.core >= mobile2.core){
            console.log(this.brand+' win '+mobile2.brand);
            console.log('this -> ',this);
        }
        else
            console.log("You lost this game");
    },
}

let mobile2={
    ram:4,
    core:2,
    brand:'Redmi',

    compare(other_mobile){
        if(this.ram > other_mobile.ram)
            console.log(this.brand+' win this Mobile '+other_mobile.brand);
        else
            console.log(`${this.brad} lost this game to ${other_mobile.brad}`);
    }
}

mobile1.compare(mobile2);
*/



















