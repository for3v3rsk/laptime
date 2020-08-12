
// ======================================
//             VARIABLES
// ======================================


// Timer variables;
let milliseconds = 0,
    seconds = 0,
    minutes = 0,
    hours = 0;


// Displayed timer variables
let displayMilliseconds = 0,
    displaySeconds = 0,
    displayMinutes = 0,
    displayHours = 0;

// variable for the setInterval() function; 
let interval = null;

// variable to hold stopwatch status
let status = "stopped";


// ======================================
//              EVENTS
// ======================================

document.querySelector("#startstop").addEventListener("click", startStop);
document.querySelector("#reset").addEventListener("click", reset);
document.querySelector("#lap").addEventListener("click", lap);



// =======================================
//              FUNCTIONS
// =======================================
function stopwatch() {
    milliseconds++;

    //  Logic to determine when to increment next value;
    if (milliseconds /99 === 1) {
        milliseconds = 0;
        seconds++;

        if (seconds / 60 === 1) {
            minutes++;
            seconds = 0;

            if (minutes / 60 === 1) {
                hours++;
                minutes = 0;
            }
        }
    }


    // Add zero (0) to single digit times;
    if (milliseconds < 10) {
        displayMilliseconds = "0" + milliseconds.toString();
    } else {
        displayMilliseconds = milliseconds;
    }

    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    } else {
        displaySeconds = seconds;
    }

    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    } else {
        displayMinutes = minutes;
    }

    if (hours < 10) {
        displayHours = "0" + hours.toString();
    } else {
        displayHours = hours;
    }


    // Display updated time values to user
    document.getElementById("timerDisplay").innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}:${displayMilliseconds}`;
}

// start, pause, stop timer function
function startStop() {
    if (status === "stopped") {
        // start the stopwatch by calling the setInterval() function;
        interval = window.setInterval(stopwatch, 0.1);
        // document.getElementById("startstop").innerHTML = "pause";
        document.getElementById("startstop").innerHTML = `<i class="fal fa-pause"></i>`;
        status = "running";
    } else {
        window.clearInterval(interval);
        // document.getElementById("startstop").innerHTML = "resume";
        document.getElementById("startstop").innerHTML = `<i class="fal fa-play"></i>`;
        status = "stopped";
    }
}




// stopwatch reset function
function reset() {
    window.clearInterval(interval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    // reverts start button from pause/resume to start
    // document.getElementById("startstop").innerHTML = "start";
    document.getElementById("startstop").innerHTML = `<i class="fal fa-play"></i>`;

    // resets time displayed to user
    document.getElementById("timerDisplay").innerHTML = "00:00:00:00";
    
    
    // Clear lap times by deleting all list (li) nodes
    parent = document.querySelector("#lapList");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

    // resets status of timer
    status = "stopped";
}

// creates lap function to display lap times
function lap() {
    if(status === "running") {
        // checks timer status before creating lap time list, list item and
        // appending to ul
        let lapListContainer = document.getElementById("lapList");
        let lapListItem = document.createElement("li");
        let lapTimeStamp = `${displayHours}:${displayMinutes}:${displaySeconds}:${displayMilliseconds}`;
        const runLapTime = [];
        // lapListItem.innerText = `${displayHours}:${displayMinutes}:${displaySeconds}:${displayMilliseconds}`;
        lapListItem.innerText = lapTimeStamp;
        lapListContainer.appendChild(lapListItem);
        
        
            
            
        

    } else {
        // if timer is not running alert user to start/resume timer
        alert("Please start/resume the timer.");
    }

   
}




