function startTime()
{
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    document.getElementById('clock').innerHTML = h+":"+m+":"+s;
    //setTimeout('startTime()', 1000); //recursion 
}
setInterval('startTime()', 1000);  
startTime();