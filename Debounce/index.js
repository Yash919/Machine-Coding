const input = document.querySelector(".input");

function inputHandler(event){
    console.log(event.target.value);
}

function debounce(callback, delay){
    let timerId;
    return function(...args){
        clearTimeout(timerId);
        timerId = setTimeout(() =>{
            callback(...args);
        }, delay);
    };
}

const debounceInputHandler = debounce(inputHandler,500);

input.addEventListener("keyup", debounceInputHandler);