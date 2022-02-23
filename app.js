let totalTime = 0;
let countdown;
let showClock = document.querySelector('.timeFace');
let startButton = 0;
let alarm = new Audio('./Alarm-Clock Sound!!!.mp3');

function addten(){
    totalTime+= 10*60;
    timer(totalTime);
}
function addtwentyfive(){
    totalTime+= 25*60;
    timer(totalTime);
}
function addhour(){
    totalTime+= 60*60;
    timer(totalTime);
}

console.log(totalTime);

function timer(second){
    clearInterval(countdown);
    const now = Date.now();
    var then = now + second*1000;
    if(second <= 0) return;

    displayTime(second);
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        totalTime = secondsLeft;

        if(secondsLeft < 0){
            alarm.play();
            document.title = "Time End";
            clearInterval(countdown);
            return;
        } 
        
        displayTime(secondsLeft);
    }, 1000);
}

function displayTime(second){
    const minute = Math.floor(second / 60);
    const remainderSecond = second % 60;
    const showTime = `${minute < 10 ? '0':''}${minute} : ${remainderSecond < 10 ? '0':''}${remainderSecond}`
    document.title =  showTime;
    document.querySelector('.timeFace').textContent = showTime;
}
