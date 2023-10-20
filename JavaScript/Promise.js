/*In JavaScript, a Promise is a built-in object that represents a future value or the eventual completion (or failure) of an asynchronous operation. Promises provide a cleaner and more structured way to work with asynchronous code, making it easier to manage asynchronous tasks, such as network requests, file operations, and timers. Promises were introduced in ECMAScript 6 (ES6) and have become a fundamental part of modern JavaScript development. Here's an overview of Promises in JavaScript:     */
function ticketBookingFun(){
const ticketBooking=new Promise((resolve,reject)=>{
    let ticket=true;
    if(ticket)
        resolve(500);
    else
        reject();
});

ticketBooking
.then((num)=>console.log("your ticket booked successfully, amount Rs."+num))//HANDLE THE SUCCESSFUL RESULT
.catch(()=>console.log("ticket booking is failed"));//HANDLE THE FAILURE PART
}

setInterval(ticketBookingFun,500);

//USING PROMISE INSIDE FUNCTION
function tossCoin()
{
    return new Promise((resolve,reject)=>{
        let head=Math.floor(Math.random()*2);
        if(head)
            //resolve("its head");
            setTimeout(resolve,2000,"it's head");
        else
            reject("its tail");
    })
}
/*  In JavaScript, Promises are a one-time-use construct. Once a Promise has been resolved or rejected (i.e., its state has changed), you cannot change its state or attach new .then() or .catch() handlers to it. Each time you call the tossCoin() function, it creates a new Promise instance, and the previous state of the Promise has no impact on the new instance. That's why during the second call, there is no attachment of .then() or .catch() from the previous call.   wer have to create new then and catch methods along with function call    */
tossCoin()
.then(()=>console.log("Yahooo!!! Yow win the toss"))
.catch(()=>console.log("you lost"));

tossCoin();
console.log();

//setInterval(()=>console.log(Math.random()*5),500);
// if(-1)
//     console.log("print"); //JS CONSIDER 0->FALSE NON 0->TRUE 

