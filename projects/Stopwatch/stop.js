let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let time = null;


function settime(){
    milliseconds+=10;

    if(milliseconds === 1000){
        milliseconds = 0;
        seconds++;
    }

    if(seconds === 60){
        seconds = 0;
        minutes++;
    }

    if(minutes === 60){
        minutes = 0;
        hours++;
    }

    document.getElementById("time").innerHTML = 
    String(hours).padStart(2, '0') + ":" +
    String(minutes).padStart(2, '0') + ":" +
    String(seconds).padStart(2, '0') + ":" +
    String(milliseconds).padStart(3, '0');


}


function start(){
    if(time === null){
        time = setInterval(settime,10);
    }
}


function pause(){
    clearInterval(time);
    time = null;
}

function reset(){
    pause();
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("time").innerHTML = "00:00:00:000";
}