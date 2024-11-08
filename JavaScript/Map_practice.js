//CREATING A NEW MAP

let map_1=new Map();

map_1.set("name","sabari");
map_1.set('age',21);
map_1.set('profession','software dev.');

let hobby=['playing','reading','coding'];
map_1.set('hobbies',hobby);

//ITERATING
/*
console.log("----------Iterations over the map1--------");
    // FOR OF
console.log('\n---printing entries of map---');
for(let entries of map_1)
    console.log(entries);

console.log('\n---printing key, value of map---');
for(let [k,v] of map_1)
    console.log(k,":",v);

console.log('\n---for each loop---');
map_1.forEach( (val, key) =>{ //value and then key because in array first value then only index right...like that 
    console.log(key,":",val);
})

console.log();
for(let key of map_1.keys())
{
    console.log(map_1.get(key));
}
*/

console.log("\nMy hobbies");
console.log('----------')
for(let val of map_1.get('hobbies'))
    console.log(val);

//METHODS OF MAP
console.log("\n-----------Methods Of Map----------");
console.log("Size of the map :",map_1.size);

map_1.set('location','karur');
console.log('\n',map_1);
console.log(map_1.delete('location'));
console.log(map_1);

console.log(map_1.values());

map_1.set('name','Sabari Murugan');
console.log(map_1);

map_1.clear();
console.log(map_1);