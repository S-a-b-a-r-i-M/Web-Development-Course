
class Father
{
    name;
    age;
    asset;

    setValues(name, age, asset)
    {
        this.name=name;
        this.age=age;
        this.asset=asset;
    }

    print()
    {
        console.log("im from father class\n");
    }
}

class Mother
{
    name="Chithra";
    age=43;
    asset=50000;

    toString()
    {
        console.log("i'm from mother class");
    }

}

//INHERITANCE FATHER CLASS TO SON CLASS
class Son extends Father // mother   ---   JS DOESN'T SUPPORT MULTIPLE INHERITANCE
{
    profession;

    setValues(name, age, asset, profession)
    {
        this.name=name;
        this.age=age;
        this.asset=asset;
        this.profession=profession;
    } 

    specialties()
    {
        console.log("He knows lot of things 1.Karate  2.Swimming  3.Driving");
    }
}


const son=new Son();
const father=new Father();

father.setValues('Murugan',45,10000);
son.setValues('Sabari',21,father.asset+50000,'Software Developer');

console.log(father.name);
console.log(father.age);
console.log(father.asset,'\n');
father.print();

//ACCESSING FATHER CLASS PROPERTIES
console.log( `${son.name} is ${son.age} years old and his asset value is ${son.asset} , he working as a ${son.profession}\n`);
son.print();


//SUPER KEYWORD
class Animal
{
    static alive=true;
    
    constructor(name,type)
    {
        this.name=name;
        this.type=type;
    }
    
    eat()
    {
        console.log("It can eat");
    }

    sleep()
    {
        console.log("It can sleep");
    }
}

class Lion extends Animal
{
    constructor(name,type,runningSpeed)
    {
        super(name,type);
        this.runningSpeed=runningSpeed;
        /*In JavaScript, it's perfectly valid to create and assign properties directly on objects 
        (in this case, instances of the Lion class) without explicitly declaring them beforehand. 
        The this.runningSpeed property is created dynamically when the constructor is executed and is specific to each instance of the Lion class.*/
    }

    toString()
    {
        return this.name+" "+" is a "+this.type+" ,it's running speed is "+this.runningSpeed;
    }
}

class Eagle extends Animal
{
    
    constructor(name,type,flyingSpeed)
    {
        super(name,type);
        this.flyingSpeed=flyingSpeed;
    }

    toString()
    {
        return this.name+" "+" is a "+this.type+" ,it's flying speed is "+this.flyingSpeed;
    }
}

const lion = new Lion('Lion','predator','50 km/hr');
//console.log(lion.alive);//INHERITANCE DOESN'T WORK ON STATIC VARIABLES AND METHODS
console.log(lion.toString());

const eagle=new Eagle('Eagle','predator','80 mile/hr');
console.log(eagle.toString());

console.log("We can't access the super class static variable",eagle.alive);