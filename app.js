let seconds = 00;
let tens = 00;
let appendSeconds = document.getElementById("seconds");
let appendTens = document.getElementById("tens");
let startBtn = document.getElementById("startBtn");
let StopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");
let interval

function time() {
    tens++;
    if(tens < 9){
        appendTens.innerHTML = "0" + tens;
    }
    if(tens > 9){
        appendTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if(seconds > 9){
        appendSeconds.innerHTML = seconds;
    }
};

startBtn.onclick = function (){
    interval = setInterval(time);
}
stopBtn.onclick = function (){
    clearInterval(interval);
}
resetBtn.onclick = function (){
    clearInterval(interval);
    tens = "00";
    seconds= "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
}


    _