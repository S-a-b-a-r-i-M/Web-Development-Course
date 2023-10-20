//THE CALL STACK SEND THE CALLBACK FUNCTION AND THE TIME(MS) TO BROWSER ,ONCE THE TIME GET FINISHED THE BROWSER WILL ADD THE CALLBACK FUN TO THE CALLBACK QUEUE ,AND THEN EVENT HANDLER CHECKS THE CALL STACK IF IT'S EMPTY IT POP THE CALLBACK FUN() FROM THE QUEUE AND PUT IT IN THE CALL STACK
 
//CALL BACK FUNCTIONS()
setTimeout(()=>console.log("task1"), 1001);
for(let i=0;i<10_00_000;i++){}
setTimeout(()=>console.log("task2"), 1005);
setTimeout(()=>console.log("task3"), 999);
setTimeout(()=>console.log("task4"),998);

let i=0;
setInterval(() => console.log(i++), 1000);