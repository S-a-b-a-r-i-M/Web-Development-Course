//ASYNC FUNCTIONS ALWAYS RETURNS A PROMISE
async function fun()
{
    return "hello";
}

console.log(fun());

fun().then((msg)=>console.log(msg));

function bookingStatus()
{
    return new Promise(
        (resolve,reject)=>{
            let booked=false;
            if(booked)
                resolve();
            else
                reject();
        })
}

bookingStatus()
.then(()=>console.log("booked successfully"))
.catch(()=>console.log("Ticket is not available"));

