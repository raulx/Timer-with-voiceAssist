
// var synth = window.speechSynthesis;
// var utterance = new SpeechSynthesisUtterance(seconds);
//   synth.speak(utterance);

// variables

const startBtn = document.getElementById('start_button');
const stopBtn = document.getElementById('stop_button');
const resetBtn = document.getElementById('reset_button');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

let minutes = 4;
let seconds = 60;
let timer;

function startTimer(){
    seconds--;
    if(seconds < 0){
        seconds = 59
        minutes--
    }
    if(minutes === 0){
        seconds = 0
        clearInterval(timer)
    }
    //Display the current time
    minutesDisplay.innerText = nod(minutes);
    secondsDisplay.innerText = nod(seconds);

}
function nod(time){
    if(time > 9){
        return time;
    }
    else{
        return `0${time}`;
    }
}
startBtn.addEventListener('click',()=>{
    if(!timer){
        timer = setInterval(startTimer,1000)
    }
})

stopBtn.addEventListener('click',()=>{
    clearInterval(timer)
    timer = null;
})

resetBtn.addEventListener('click',()=>{
    seconds = 0;
    minutes = 5;
    minutesDisplay.innerText = nod(minutes);
    secondsDisplay.innerText = nod(seconds);
})