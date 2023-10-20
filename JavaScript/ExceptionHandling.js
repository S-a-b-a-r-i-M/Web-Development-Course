
let divider=prompt("Enter a divider");
let diviser=prompt("Enter a diviser");

try
{
    if(diviser==0)
        throw("Dividing by zero error");

    let res=divider/diviser;
    console.log("Answer is :",Math.round(res));
}
catch(error)
{
    console.log(error);
}
finally
{
    console.log("program runned succesfully");
}