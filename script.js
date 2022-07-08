const text = document.getElementById("text");
const option = document.getElementById("level");
const start = document.querySelector(".start");
const error = document.querySelector(".data1");
let timer = document.querySelector(".timer");
const userData = {};
var startTimerInSecond = 1;
var timeInSecond = 1;
var interval;
var infiniteInterval;
let character = document.querySelector(".character");
const parameter = {
	easy: {
		time: 5,
		wrong: 3
	},
	hard: {
		time: 3,
		wrong: 2
	}
};

/**
 * listening the button event
 */
start.addEventListener("click", () => {
	if (!text.value || !option.value) {
		error.innerHTML = `Details are empty!!!`;
	} else {
		userData["text"] = text.value;
		userData["option"] = option.value;
		if (option.value === "easy") {
			startTimer(parameter.easy);
			generateNewAlphabet(parameter.easy);
		} else {
			startTimer(parameter.hard);
		}
	}
});

/**
 *
 * @param {Object} parameter
 * to start main timer
 */
function startTimer(parameter) {
	infiniteInterval = setInterval(() => {
		if (parameter.wrong === 1) {
			clearInterval(infiniteInterval);
		}
		timer.innerHTML = `Timer started:- ${startTimerInSecond}`;
		startTimerInSecond += 1;
	}, 1000);
}

/**
 * @param {Object} parameter
 * it will generate random word from the list after 5 seconds
 */
function generateNewAlphabet(parameter) {
	interval = setInterval(() => {
		if (timeInSecond > parameter.time) {
			let generated = generateRandomLetter();
			compareGeneratedLetter(generated);
			timeInSecond = 0;
			clearInterval(interval);
		}
		timeInSecond += 1;
		console.log(timeInSecond);
	}, 1000);
}

function generateRandomLetter() {
	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function compareGeneratedLetter(generated) {
	character.innerHTML = `Character is : ${generated}`;
}
