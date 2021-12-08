const timer = document.getElementById("stopwatch");
const timerStarted = document.getElementById("start-timer");
const timerStopped = document.getElementById("stop-timer");

let hr = 0;
let min = 0;
let sec = 0;
let msec = 0;
let audio = new Audio("joker_laugh.mp3");

let stoptime = true;

// function for starting the timer
function startTimer() {
	if (stoptime == true) {
		stoptime = false;
		// hide the timer stopped text
		timerStopped.setAttribute("hidden", "true");
		// show the timer started text
		timerStarted.removeAttribute("hidden");
		// audio will start
		audio.play();
		// timer cycle start
		timerCycle();
	}
}

// function for stopping the timer
function stopTimer() {
	if (stoptime == false) {
		stoptime = true;
	}
}

// function for reset timer
function resetTimer() {
	timer.innerHTML = "00:00:00:00";
	stoptime = true;
	// hide the timer started text
	timerStarted.setAttribute("hidden", "true");
	// show the timer stopped text
	timerStopped.removeAttribute("hidden");
	// audio will pause on reseting
	audio.pause();
	// for starting audio from the beginning on starting the timer again
	audio.currentTime = 0;
	hr = 0;
	min = 0;
	sec = 0;
	msec = 0;

	setTimeout(removeText, 3000);
}

// function 
function timerCycle() {
	if (stoptime == false) {
		// parseInt method parses a string argument and returns an integer
		hr = parseInt(hr);
		min = parseInt(min);
		sec = parseInt(sec);
		msec = parseInt(msec);

		msec = msec + 1;

		if (msec == 100) {
			sec++;
			msec = 0;
		}

		if (sec == 60) {
			min++;
			sec = 0;
		}

		if (min == 60) {
			hr++;
			min = 0;
		}

		if (msec < 10 || msec == 0) {
			msec = "0" + msec;
		}

		if (sec < 10 || sec == 0) {
			sec = "0" + sec;
		}

		if (min < 10 || min == 0) {
			min = "0" + min;
		}

		if (hr < 10 || hr == 0) {
			hr = "0" + hr;
		}

		timer.innerHTML = hr + ":" + min + ":" + sec + ":" + msec;

		setTimeout(timerCycle, 10);
	}
}

// function to show hidden text on stopping timer
function removeText() {
	timerStopped.setAttribute("hidden", "true");
}
