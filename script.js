let hours = 0;
let minutes = 0;
let seconds = 0;
let laps = [];
let interval;
let isRunning = false;

document.getElementById("start").addEventListener("click", start);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("lap").addEventListener("click", lap);

function start() {
    if (!isRunning) {
        interval = setInterval(run, 1000);
        isRunning = true;
    }
}

function pause() {
    if (isRunning) {
        clearInterval(interval);
        isRunning = false;
    }
}

function reset() {
    pause();
hours = 0;
    minutes = 0;
    seconds = 0;
    laps = [];
    updateDisplay();
    updateLaps();
}

function lap() {
    if (isRunning) {
        let lapTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        laps.push(lapTime);
        updateLaps();
    }
}

function run() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}
function updateDisplay() {
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

function updateLaps() {
    let lapList = document.getElementById("lap-list");
    lapList.innerHTML = "";
    laps.forEach((lap, index) => {
        let lapItem = document.createElement("li");
        lapItem.textContent = `Lap ${index + 1}: ${lap}`;
        lapList.appendChild(lapItem);
    });
}

