const currentTime = new Date().getFullYear();

const newDate = new Date(`April 7 ${currentTime} 00:00:00`);

const daynumber = document.getElementById("days");
const hournumber = document.getElementById("hours");
const minsnumber = document.getElementById("minutes");
const secondsnumber = document.getElementById("seconds");

function updateTimer(){
    const presentTime = new Date();
    const difference = newDate - presentTime;

    const day = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hour = Math.floor(difference / 1000 / 60 /60) % 24;
    const mins = Math.floor(difference / 1000 /60) % 60;
    const secs = Math.floor(difference / 1000) % 60;

    daynumber.innerHTML = day;
    hournumber.innerHTML = hour;
    minsnumber.innerHTML = mins;
    secondsnumber.innerHTML = secs;

}

setInterval(updateTimer, 1000);