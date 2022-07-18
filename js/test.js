(function () {
	const playground = document.getElementById("playground");
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	let length = 0;
	const onScreenBubbles = [];
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

	const readAlphabets = function () {
		document.addEventListener("keyup", (event) => {
			console.log(event.key);
		});
	};

	const getRandomBubbleText = function () {
		let alpha = alphabet[Math.floor(Math.random() * alphabet.length)];
		if (!onScreenBubbles.includes(alpha)) {
			onScreenBubbles.push(alpha);
			console.log(onScreenBubbles);
			return alpha;
		} else return getRandomBubbleText();
	};

	const createBubble = function (text) {
		const bubbleContainer = document.createElement("div");

		const bubble = document.createElement("div");
		const bubbleText = document.createElement("div");
		bubbleText.innerText = text;

		bubble.classList.add("bubble");
		bubbleContainer.classList.add("bubble-container");
		bubbleContainer.style.position = "relative";

		bubble.appendChild(bubbleText);
		bubbleContainer.appendChild(bubble);
		playground.appendChild(bubbleContainer);
	};

	const init = function () {
		let time = setInterval(function () {
			if (length < alphabet.length) {
				const newAlpha = getRandomBubbleText();
				createBubble(newAlpha);
			} else {
				clearInterval(time);
			}
			length++;
		}, 1000);
	};

	init();
	readAlphabets();
})();
