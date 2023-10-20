


function displayTime()
{
    let meridium=document.getElementById('meridium');
    let dateTime=new Date();
    let hr=dateTime.getHours();
    let min=dateTime.getMinutes();
    let sec=dateTime.getSeconds();

    //GET HTML ELEMENTS,AND ASSIGN VALUES
    if(hr>12)
    {
        hr-=12;
        meridium.innerHTML='PM';
    }
    else
        meridium.innerHTML='AM';
    
    
    document.getElementById('hr').innerHTML=padZero(hr);
    document.getElementById('min').innerHTML=padZero(min);
    document.getElementById('sec').innerHTML=padZero(sec);
}

setInterval(displayTime,1000);

function padZero(num)
{
    return num<10?"0"+num:num;
}