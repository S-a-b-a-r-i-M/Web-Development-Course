/*
'Chennai': population = 4646732
           literacyRate = 90.20
           language = 'Tamil'
'Bengaluru':population = 8443675
            literacyRate = 88.71
            language = 'Kannada'
'Mumbai':population = 12442373
        literacyRate = 89.73
        language = 'Marathi'
'Delhi': population = 16787941
         literacyRate = 86.20
         language = 'Hindi'
The Indian city of Bengaluru has a population of 8443675. Language spoken is Kannada and literacy rate is 88.71%.
*/

const button=document.querySelector("btn");

//CREATING AN HTML DIV ELEMENT INSIDE JS
let result=document.createElement("div");
//console.log('type',typeof(result));
result.id="result";
result.style.margin="20px";
result.style.color="white";
result.style.fontSize="1.1em";
//JOIN THE RESULT DIV TO HTML PAGE
let container=document.querySelector(".container");
container.appendChild(result);


btn.addEventListener("click",showStats);
function showStats()
{
    //GETTING DROWPDOWN MENUS VALUE
    const input=document.getElementById("cities");
    //console.log(input.options, input.selectedIndex);
    let city=input.options[input.selectedIndex].value;
    // console.log(city);
    let  population,literacyRate,language;
    switch(city)
    {
        case "Coimbatore":
            console.log("Coimbatore");
            population = 4646732;
            literacyRate = 90.20;
            language = 'Tamil';
            break;
        case "Bangalore":
            console.log("Bangalore");
            population = 8443675;
            literacyRate = 88.71;
            language = 'Kannada';
            break;
        case "Hyderabad":
            console.log("Hyderabad");
            population = 16787941;
            literacyRate = 86.20;
            language = 'Telugu';
            break;
        case "Mumbai":
            console.log("Mumbai");
            population = 12442373;
            literacyRate = 89.73;
            language = 'Hindi';
            break;
    }

    let text=`The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}%`;
    //console.log(text);

    document.getElementById('result').innerHTML=text;
}