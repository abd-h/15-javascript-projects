/*Settings Button
Got the setting, Minutes and seconds elements. Also declared a toggleSettings 
variable to keep track of the click of the Settings button.*/

const  progressBar = document.querySelector(".outerRing"),
        minElem = document.querySelector("#minutes"),
        secElem = document.querySelector("#seconds"),
        startStop = document.querySelector("#stsp"),
        setting = document.querySelector("#setting");

let minutes = document.querySelector("#minutes").innerHTML,
     seconds = document.querySelector("#seconds").innerHTML,
     progress = null, 
     progressStart = 0,
     progressEnd = parseInt(minutes) * 60 + parseInt(seconds),
     speed = 1000,
     degTravel = 360 / progressEnd,
     toggleSetting = false,
     secRem = 0,
     minRem = 0;

function progressTrack() {
    progressStart++;

    secRem = Math.floor((progressEnd - progressStart) % 60);
    minRem = Math.floor((progressEnd - progressStart) / 60);

    secElem.innerHTML = secRem.toString().length == 2 ? secRem : `0${secRem}`;
    minElem.innerHTML = minRem.toString().length == 2 ? minRem : `0${minRem}`;
    
    progressBar.style.background = `conic-gradient(
        #9d0000 ${progressStart * degTravel}deg,
        #17171a ${progressStart * degTravel}deg
    )`;
    if (progressStart == progressEnd) {
        progressBar.background = `conic-gradient(
            #00aa51 360deg,
            #00aa51 360deg
        )`;
        clearInterval(progress);
        startStop.innerHTML = "START";
        progress = null;
        progressStart = 0;
    }
}    

function startStopProgress() {
    if(!progress) {
        progress = setInterval(progressTrack, speed);
    } else {
        clearInterval(progress);
        progress = null;
        progressStart = 0;
        progressBar.style.background = `conic-gradient(
            #17171a 360deg,
            #17171a 360deg
        )`;
    }
}

function resetValues() {
    if (progress) {
        clearInterval(progress);
    }
    minutes.document.querySelector("#minutes").innerHTML;
    seconds.document.querySelector("#seconds").innerHTML;
    minElem.contentEditable = false;
    minElem.style.borderBottom =   `none`;
    secElem.contentEditable = false;
    secElem.style.borderBottom = `none`;
    progress = null;
    progressStart = 0;
    progressEnd = parseInt(minutes) * 60 + parseInt(seconds);
    degTravel = 360 / progressEnd;
    progressBar.style.background = `conic-gradient(
                        #17171a 360deg,
                        #17171a 360deg
             )`;
}

startStop.onclick = function () {
    if (startStop.innerHTML === "START") {
        if (!(parseInt(minutes) === 0 && parseInt(seconds) === 0)) {
            startStop.innerHTML = "STOP";
            startStopProgress();
        } else {
            alert("Enter the Time Value in your Timer!");
        }
    } else {
        startStop.innerHTML = "START";
        startStopProgress();
    }
};


/*Handles the click event on the settings button. Also, handles the onblur event for 
the Minutes and Seconds elements. */

setting.onclick = function () {
    if (!toggleSetting) {
        toggleSetting = true;
        minElem.contentEditable = true;
        minElem.style.borderBottom = `1px dashed #ffffff50`;
        secElem.contentEditable = true;
        secElem.style.borderBottom = `1px dashed #ffffff50`;
    }   else {
        resetValues();
    }
};

minElem.onblur = function () {
    resetValues();
};

secElem.onblur = function () {
    resetValues();
};

/* The function resetValues handles the values getting reassigned for minutes 
and seconds.

Start/Stop Button
I've declared the minutes and seconds as let variables, as I will be manipulating 
these for the timer display.*/

/*  When we click, the start button, first will check for minutes and second are not equal to 0. 
Then the text will change to stop and call the startStopProgress function.

The startStopProgress function will check the timer progress and update the progress bar and the 
timer display.

If the STOP button, use the same function to cleat the progress and change text back to START.*/
   




/* Progress Bar
We will setInterval() to run our code that helps track the progress. */
