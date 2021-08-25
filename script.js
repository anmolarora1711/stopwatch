const timer = document.getElementById("stopwatch");
const timerStarted = document.getElementById("start-timer");
const timerStopped = document.getElementById("stop-timer");

let hr = 0;
let min = 0;
let sec = 0;
let msec = 0;
let audio = new Audio("joker_laugh.mp3");

let stoptime = true;

function startTimer() {
	if (stoptime == true) {
		stoptime = false;
		timerStopped.setAttribute("hidden", "true");
		timerStarted.removeAttribute("hidden");
		audio.play();
		timerCycle();
	}
}

function stopTimer() {
	if (stoptime == false) {
		stoptime = true;
	}
}

function resetTimer() {
	timer.innerHTML = "00:00:00:00";
	stoptime = true;
	timerStarted.setAttribute("hidden", "true");
	timerStopped.removeAttribute("hidden");
	audio.pause();
	audio.currentTime = 0;
	hr = 0;
	min = 0;
	sec = 0;
	msec = 0;

	setTimeout(removeText, 3000);
}

function timerCycle() {
	if (stoptime == false) {
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

function removeText() {
	timerStopped.setAttribute("hidden", "true");
}
