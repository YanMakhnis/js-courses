let timerWrapper = document.querySelector('#value')
let startButton = document.querySelector('#start')
let stopButton = document.querySelector('#stop')
let resetButton = document.querySelector('#reset')
let timerValue = +timerWrapper.innerText
let timerId = null

startButton.addEventListener('click', startTimer, {once:true})
stopButton.addEventListener('click', stopTimer)
resetButton.addEventListener('click', resetTimer)

function startTimer() {
    timerId = setInterval(increaseValue, 1000)
}

function stopTimer() {
    clearInterval(timerId)
}

function resetTimer() {
    timerValue = 0;
}

function increaseValue() {
    timerValue++
    showValue()
}

function showValue() {
    timerWrapper.innerHTML = timerValue
}



// Задание 2

let documentElement;

function documentClickHandler() {}



// Задание 3

let locationButton;

function getUserData() {}

function userDataHandlerSuccess() {}

function userDataHandlerFail() {}
