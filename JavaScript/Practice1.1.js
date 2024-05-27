import Flight,{totFlights} from './GetAndSetWithModules.js'

//WORKING WITH MODULES
let newFlight=new Flight("Deacon",50,2999);
newFlight.takeof();
console.log(newFlight.price);
newFlight.price=6000;
console.log(newFlight.price);
//ACCESSING THE FUNCTION DEFINED INSIDE ANOTHER JS FILE
console.log(totFlights());