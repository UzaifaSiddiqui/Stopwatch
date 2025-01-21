let second = document.querySelector(".second");
let tenSecond = document.querySelector(".ten-second");
let minute = document.querySelector(".minute");
let tenMinute = document.querySelector(".ten-minute");
let hour = document.querySelector(".hour");
let tenHour = document.querySelector(".ten-hour")

let secondNum = Number(second.innerText);
let tenSecondNum = Number(tenSecond.innerText);
let minuteNum = Number(minute.innerText);
let tenMinuteNum = Number(tenMinute.innerText);
let hourNum = Number(hour.innerText);
let tenHourNum = Number(tenHour.innerText);

let interval;

function run(){
    interval = setInterval(function (){
        secondNum += 1;
        second.innerText = String(secondNum);
        if (secondNum > 9){
            tenSecondNum += 1;
            tenSecond.innerText = String(tenSecondNum);
            secondNum = 0;
            second.innerText = String(secondNum);
        }
        if (tenSecondNum === 6){
            minuteNum +=1;
            minute.innerText = String(minuteNum);
            tenSecondNum = 0;
            tenSecond.innerText = String(tenSecondNum);
            secondNum = 0;
            second.innerText = String(secondNum);
        }
        if (minuteNum > 9){
            tenMinuteNum +=1;
            tenMinute.innerText = String(tenMinuteNum);
            minuteNum = 0;
            minute.innerText = String(minuteNum);
            tenSecondNum = 0;
            tenSecond.innerText = String(tenSecondNum);
            secondNum = 0;
            second.innerText = String(secondNum);
        }
        if (tenMinuteNum === 6){
            hourNum += 1;
            hour.innerText = String(hourNum);
            tenMinuteNum = 0;
            tenMinute.innerText = String(tenMinuteNum);
            minuteNum = 0;
            minute.innerText = String(minuteNum);
            tenSecondNum = 0;
            tenSecond.innerText = String(tenSecondNum);
            secondNum = 0;
            second.innerText = String(secondNum);
        }
        if (hourNum > 9){
            tenHourNum += 1;
            tenHour.innerText = String(tenHourNum);
            hourNum = 0;
            hour.innerText = String(hourNum);
            tenMinuteNum = 0;
            tenMinute.innerText = String(tenMinuteNum);
            minuteNum = 0;
            minute.innerText = String(minuteNum);
            tenSecondNum = 0;
            tenSecond.innerText = String(tenSecondNum);
            secondNum = 0;
            second.innerText = String(secondNum);
        }
     
    },1000);
}

function stop(){
    clearInterval(interval); 
    interval = null; 

    secondNum = Number(second.innerText);
    tenSecondNum = Number(tenSecond.innerText);
    minuteNum = Number(minute.innerText);
    tenMinuteNum = Number(tenMinute.innerText);
    hourNum = Number(hour.innerText);
    tenHourNum = Number(tenHour.innerText);

    second.innerText = String(secondNum);
    tenSecond.innerText = String(tenSecondNum);
    minute.innerText =  String(minuteNum);
    tenMinute.innerText = String(tenMinuteNum);
    hour.innerText = String(hourNum);
    tenHour.innerText = String(tenHourNum);
}

function reset(){
    stop();

    second.innerText = "0";
    tenSecond.innerText = "0";
    minute.innerText = "0";
    tenMinute.innerText = "0";
    hour.innerText = "0";
    tenHour.innerText = "0";

    secondNum = 0;
    tenSecondNum = 0;
    minuteNum = 0;
    tenMinuteNum = 0;
    hourNum = 0;
    tenHourNum = 0;
}