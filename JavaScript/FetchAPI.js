
async function JokeApi()
{
     fetch("https://official-joke-api.appspot.com/jokes/programming/random")//IT RETURNS AN PROMISE
    .then((msg)=>msg.json())
    .then((joke)=>console.log("Today joke :",joke[0].setup,"\nAns:",joke[0].punchline,"\n",joke))
    .catch((err)=>console.log(err));
}

JokeApi();
//FETCHING THIRUKKURAL API
fetch("https://type.fit/api/quotes")
.then((content)=>content.json())
.then((slogan)=>console.log("Today slogan :",slogan[Math.floor(Math.random()*10)].text))
.catch(reject=>console.log("failed to fetch API"));