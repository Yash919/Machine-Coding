const currentTime = document.querySelector(".para");

const buttonParent = document.querySelector(".btn-container");

let seconds = 0;
let minutes = 0;
let hours = 0;

// Making global
let timerId = null;

function displayTime(hours,minutes,seconds){
    currentTime.innerText = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds<10 ? `0${seconds}` : seconds}`;
}

function handleButtonClick(event){
    const button = event.target.name;
    if(button === "start"){
        // If we press start than more thread starts to run
        if (timerId !== null) return; 

        timerId = setInterval(() => {
            seconds++;
            if(seconds > 58){
                minutes++;
                seconds=0;
                if(minutes > 58){
                    hours++;
                    minutes=0;
                }
            }
            displayTime(hours,minutes,seconds);
        }, 100);
    }

    if(button === "stop"){
        if(timerId !== null){
        clearInterval(timerId);
        timerId = null;
        }
    }

    if(button === "reset"){
        if(timerId !== null){
        clearInterval(timerId);
        timerId = null;
        }
        seconds = 0;
        minutes = 0;
        hours = 0;
        displayTime(hours,minutes,seconds);
    }

}


buttonParent.addEventListener("click",handleButtonClick);