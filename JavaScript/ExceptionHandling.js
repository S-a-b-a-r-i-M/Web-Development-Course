
let divider=prompt("Enter a divider");
let deviser=prompt("Enter a diviser");

try
{
    if(deviser==0)
        throw("Dividing by zero error");

    let res=divider/deviser;
    console.log("Answer is :",Math.round(res));
}
catch(error)
{
    console.log(error);
}
finally
{
    console.log("program ran successfully");
}