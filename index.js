//initialize speech
let synth = window.speechSynthesis;


// variables

const startBtn = document.getElementById('start_button');
const stopBtn = document.getElementById('stop_button');
const resetBtn = document.getElementById('reset_button');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
// 5 minutes timere's default value is set to 4 minutes 60 seconds i.e 5min.
let minutes = 4;
let seconds = 60;
let timer;

//Audio

const startSound = new Audio('./clock-sounds/start.wav');
const pauseSound = new Audio('./clock-sounds/pause.wav');
const resetSound = new Audio('./clock-sounds/reset.mp3');

function startTimer(){
    seconds--;
    if(seconds < 0){
        seconds = 59
        minutes--
    }
    if(minutes === 0 && seconds === 0){
        clearInterval(timer)
    }
    if(minutes === 2 && seconds === 30){
        let utterance = new SpeechSynthesisUtterance('2 and a half minutes left.');
        synth.speak(utterance);
    }
    if(minutes === 1 && seconds === 0){
        let utterance = new SpeechSynthesisUtterance('1 minutes remaining.');
        synth.speak(utterance);
    }
    if(minutes === 0 && seconds === 0){
        let utterance = new SpeechSynthesisUtterance('Times Up.');
        synth.speak(utterance);
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
        startSound.play()
    }
})

stopBtn.addEventListener('click',()=>{
    clearInterval(timer)
    timer = null;
    pauseSound.play()
})

resetBtn.addEventListener('click',()=>{
    seconds = 0;
    minutes = 5;
    minutesDisplay.innerText = nod(minutes);
    secondsDisplay.innerText = nod(seconds);
    resetSound.play()
})