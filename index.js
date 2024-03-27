const display = document.getElementById("displayPanel")

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isRunning = false;

function playSound(){
    var audio = new Audio('buzzer.wav');
    audio.play()
}





function start(){
    if(!isRunning){
   timer = setInterval(update, 10)
   isRunning = true;
   playSound()
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer)
        isRunning = false;
        playSound()
    }
}

function reset(){
   hours = 0;
    minutes = 0;
seconds = 0;
milliseconds = 0;
isRunning = false;
clearInterval(timer)

display.textContent = "00:00:00:00"

}



function update(){
    milliseconds++
    if(milliseconds >= 100){
        milliseconds = 0;
        seconds++;
    }

    if(seconds >= 60){
        seconds = 0;
        minutes++;
    }

    if(minutes >= 100){
        minutes = 0;
        hours++;
    }

    hours = hours.toString().padStart(2, 0)
minutes = minutes.toString().padStart(2, 0)
seconds = seconds.toString().padStart(2, 0)
milliseconds = milliseconds.toString().padStart(2, 0)
 
    display.textContent = hours + ":" + minutes + ":" + seconds + ":" + milliseconds
}


document.getElementById("stopW").style.background = "black";
document.getElementById("stopW").style.fontSize = "3em";

function showStopwatch(){
document.getElementById("stopWatch").style.display = "block";
document.getElementById("countDown").style.display = "none";
document.getElementById("stopW").style.background = "black";
document.getElementById("countD").style.background = "none";
document.getElementById("stopW").style.fontSize = "3em";
document.getElementById("countD").style.fontSize = "2em";
}

function showCountdown(){
    document.getElementById("stopWatch").style.display = "none";
    document.getElementById("countDown").style.display = "block";
    document.getElementById("stopW").style.background = "none";
    document.getElementById("countD").style.background = "black";
    document.getElementById("stopW").style.fontSize = "2em";
document.getElementById("countD").style.fontSize = "3em";
}























let hour = 0;
let minute = 0;
let second = 0;
let isActive = false;

const hourId = document.getElementById("hour")
const minuteId = document.getElementById("minute")
const secondId = document. getElementById("second")




function startCountdown(){




    if(!isActive){
        hour = hourId.value;
minute = minuteId.value;
second = secondId.value
    timing = setInterval(displayCountdown, 1000)
    isActive = true;
    }

}


function stopCountdown(){

    if(isActive){
clearInterval(timing)
isActive = false;}

}

function resetForm(){
    document.getElementById("myForm").reset()
}

function resetCountdown(){
    resetForm()
    let hour = 0;
    let minute = 0;
    let second = 0;
    isActive = false;

    hour = hour.toString().padStart(2, 0)
minute = minute.toString().padStart(2, 0)
second = second.toString().padStart(2, 0)

    document.getElementById("displayCanel").textContent = 
hour + ":" + minute + ":" + second

clearInterval(timing)
    


}


function displayCountdown(){

second--;
hour = hour.toString().padStart(2, 0)
minute = minute.toString().padStart(2, 0)
second = second.toString().padStart(2, 0)





if(second < 0){
    second = 59;
    minute--;
    hour = hour.toString().padStart(2, 0)
minute = minute.toString().padStart(2, 0)
second = second.toString().padStart(2, 0)
}

if(minute < 0){
minute = 59;
hour--;
hour = hour.toString().padStart(2, 0)
minute = minute.toString().padStart(2, 0)
second = second.toString().padStart(2, 0)
}

if(hour < 0){
    
   
    document.getElementById("displayCanel").textContent = 
    "Time UP!!!"
    document.getElementById("displayCanel").style.color = "red"
    playSound()

    stopCountdown()

}


else{document.getElementById("displayCanel").textContent = 
hour + ":" + minute + ":" + second
document.getElementById("displayCanel").style.color = "green"

}

if(hour === "00" && minute === "00" && second < 1){

    document.getElementById("displayCanel").textContent = 
    "Time UP!!!"
    document.getElementById("displayCanel").style.color = "red"
    playSound()

    stopCountdown()


}



   
}















