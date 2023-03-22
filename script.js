var hr=0;
var min=0;
var sec=0;
var count=0;
var timer=false;



// start function
function start()
{
timer=true;
stopwatch();
}
// stop function
function stop()
{
timer=false;
}

// resrt function
function reset()
{
    
    timer=false;
    hr=0;
    min=0;
    sec=0;
    document.getElementById("min").innerHTML="00";
        document.getElementById("hr").innerHTML="00";
        document.getElementById("sec").innerHTML="00";
        document.getElementById("count").innerHTML="00";
        

}
// stopwatch function
function stopwatch()
{

    if(timer==true)
    {
       
        count=count+1;
        if(count==99)
        {
            count=0;
            sec=sec+1;
        }
        if(sec==60)
        {
            
            sec=0;
            min=min+1;
            
        }
        if(min==60)
        {
            
            sec=0;
            min=0;
            hr=hr+1;
            
        }

        let hrstring=hr;
        let secstring=sec;
        let minstring=min;
        let countstring=count;
        if(hr<10)
        {
            hrstring="0"+hrstring;
        }
        if(sec<10)
        {
            secstring="0"+secstring;
        }
        if(min<10)
        {
            minstring="0"+minstring;
        }
        if(count<10)
        {
            countstring="0"+countstring;
        }

        document.getElementById("min").innerHTML=minstring;
        document.getElementById("hr").innerHTML=hrstring;
        document.getElementById("sec").innerHTML=secstring;
        document.getElementById("count").innerHTML=countstring;
        setTimeout("stopwatch()",10);
    }
}