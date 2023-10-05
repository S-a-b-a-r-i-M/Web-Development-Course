
const body=document.getElementById("container");
const btn=document.getElementById("btn");
const hex_arr=[0,1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];

btn.addEventListener('click',
function randomHex()
{
    let value="#";
    for(i=0; i<6; ++i)
        value+=hex_arr[Math.floor(Math.random()*16)];
    body.style.backgroundColor=value;
});