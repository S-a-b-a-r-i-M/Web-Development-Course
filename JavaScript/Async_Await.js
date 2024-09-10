// SYNCHRONIZED FUNCTION

function sync1() {
    let start =  Date.now()
    // delaying the process for two sec
    while(Date.now() - start < 2000) {}
    return "data from sync1 is done"
}

function sync2() {
    let start =  Date.now()
    // delaying the process for one sec
    while(Date.now() - start < 1000) {}
    return "data from sync2 is done"
}

function sync3() {
    let start =  Date.now()
    // delaying the process for one sec
    while(Date.now() - start < 1000) {}
    return "data from sync3 is done"
}
console.log("Fetching data synchronously...");
console.log(sync1())
console.log(sync2())
console.log(sync3())



// ASYNCHRONIZED FUNCTION
function async1(){
    return new Promise((resolve) => {
        setTimeout( () => {
            console.log("data from async1 is done")
            resolve()
        }, 2000
        )
    })
}

function async2(){
    return new Promise((resolve) => {
        setTimeout( () => {
            console.log("data from async2 is done")
            resolve()
        }, 1000
        )
    })
}

function async3(){
    return new Promise((resolve) => {
        setTimeout( () => {
            console.log("data from async3 is done")
            resolve()
        }, 1000
        )
    })
}

async function mainAsync() {
    console.log("Fetching data asynchronously...");
    
    // Fetch all data sources in parallel
    await Promise.all([async1(), async2(), async3()])
    
    console.log("Finished fetching data asynchronously");
}
  
mainAsync();  