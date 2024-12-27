const colors = [
	"#6495ED",
	"#FFD700",
	"#98FB98",
	"#FA8072",
	"#2E8B57",
	"#87CEEB"
];
const letters = "I LOVE YOU";
let letterIndex = 0;
let audioStarted = false;

var fontSize = 20;
if (window.screen.width > 1200){
	fontSize = 55;
} else if (window.screen.width > 700){
	fontSize = 30;
}

function getRandomLetter() {
	const letter = letters.charAt(letterIndex);
	letterIndex = (letterIndex + 1) % letters.length;
	return letter;
}

function createFirework(x, y) {
	const launchHeight = Math.random() * (window.innerHeight / 4) + window.innerHeight / 4;
	const maxHeight = window.innerHeight / 4;
	const projectile = document.createElement("div");
	projectile.classList.add("projectile");
	document.body.appendChild(projectile);
	projectile.style.left = `${x}px`;
	projectile.style.top = `${y}px`;

	anime({
			targets: projectile,
			translateY: -Math.min(launchHeight, maxHeight),
			duration: 1200,
			easing: "easeOutQuad",
			complete: () => {
					const burstX = parseFloat(projectile.style.left)	
					const burstY = parseFloat(projectile.style.top) - Math.min(launchHeight, maxHeight)	
					projectile.remove();
					createBurst(burstX, burstY);
					createAdditionalFireworks(burstX, burstY);
			}
	});
}

function createBurst(x, y) {
	const numLetters = 15;
	const numSparkles = 50;

	// Letters
	for (let i = 0; i < numLetters; i++) {
			createParticle(x, y, false);
	}

	// Sparkles
	for (let i = 0; i < numSparkles; i++) {
			createParticle(x, y, true);
	}
}

function createParticle(x, y, isSparkle) {
	const el = document.createElement("div");
	el.classList.add(isSparkle ? "sparkle" : "particule");
	const instruction = document.querySelector('.instructions').style.display = 'none';

	if (!isSparkle) {
			el.textContent = getRandomLetter();
			el.style.color = colors[Math.floor(Math.random() * colors.length)];
	} else {
			el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
	}

	el.style.left = `${x}px`;
	el.style.top = `${y}px`;
	document.body.appendChild(el);

	animateParticle(el, isSparkle);
}

function animateParticle(el, isSparkle) {
	const angle = Math.random() * Math.PI * 2;
	const distance = anime.random(100, 200);
	const duration = anime.random(1200, 2000);
	const fallDistance = anime.random(20, 80);
	const scale = isSparkle ? Math.random() * 0.5 + 0.5 : Math.random() * 1 + 0.5;

	anime
			.timeline({
					targets: el,
					easing: "easeOutCubic",
					duration: duration,
					complete: () => el.remove()
			})
			.add({
					translateX: Math.cos(angle) * distance,
					translateY: Math.sin(angle) * distance,
					scale: [0, scale],
					opacity: [1, 0.9]
			})
			.add({
					translateY: `+=${fallDistance}px`,
					opacity: [0.9, 0],
					easing: "easeInCubic",
					duration: duration / 2
			});
}

document.addEventListener("click", (e) => {
	createFirework(e.clientX, e.clientY);

});

function createAdditionalFireworks(x, y) {
	const additionalCount = Math.floor(Math.random() * 1) + 1	;
	for(let i = 0; i < additionalCount; i++) {
		const randomX = Math.random() * window.innerWidth;
		const randomY = Math.random() * 	window.innerHeight;
		createFirework(randomX, randomY);
	}
}

// window.onload = function () {
// 	createRandomFirework();
// };

setInterval(createRandomFirework, Math.random() * 10000 + 10000);

function createRandomFirework() {
	const randomX = Math.random() * window.innerWidth;
	const randomY = Math.random() * window.innerHeight;
	createFirework(randomX, randomY);
}

function backgroundAudio() {
	if (audioStarted) return;
	const audio = new Audio('./MyLove.mp3')
	// audio.loop = true;
	audio.volume = 0.5;
	audio.play().then (() => {
		audioStarted = true;
	}).catch((error) => {
		console.log('Audio playback failed:', error)
	})

	var vara = new Vara (
		"#container",
		"https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
		[
			{
				text: "And with this ring I",
				y: 200,
				delay: 500,
				fromCurrentPosition: {y:false},
				duration: 2750
			},
			{
				text: "Say to the world",
				y: 200,
				delay: 400,
				fromCurrentPosition: {y:false},
				duration: 2500
			},
			{
				text: "You're my every reason",
				y: 200,
				delay: 260,
				fromCurrentPosition: {y:false},
				duration: 3000
			},
			{
				text: "You're all that i believe in",
				y: 200,
				delay: 250,
				fromCurrentPosition: {y:false},
				duration: 2900
			},
			{
				text: "With all my heart I",
				y: 200,
				delay: 220,
				fromCurrentPosition: {y:false},
				duration: 2700
			},
			{
				text: "Mean every word",
				y: 200,
				delay: 700,
				fromCurrentPosition: {y:false},
				duration: 3000
			},
			{
				text: "So, I say a little prayer",
				y: 200,
				delay: 200,
				fromCurrentPosition: {y:false},
				duration: 2600
			},
			{
				text: "And hope my dreams will take me there",
				y: 200,
				delay: 400,
				fromCurrentPosition: {y:false},
				duration: 3500
			},
			{
				text: "Where the skies are blue",
				y: 200,
				delay: 200,
				fromCurrentPosition: {y:false},
				duration: 2450
			},
			{
				text: "To see you once again, My Love",
				y: 200,
				delay: 500,
				fromCurrentPosition: {y:false},
				duration: 3100
			},
			{
				text: "Overseas, from coast to coast",
				y: 200,
				delay: 700,
				fromCurrentPosition: {y:false},
				duration: 2800
			},
			{
				text: "To find the place I Love the most",
				y: 200,
				delay: 200,
				fromCurrentPosition: {y:false},
				duration: 3150
			},
			{
				text: "Where the fields are green",
				y: 200,
				delay: 200,
				fromCurrentPosition: {y:false},
				duration: 2500
			},
			{
				text: "To see you once again . . . . . .",
				y: 200,
				delay: 200,
				fromCurrentPosition: {y:false},
				duration: 3000
			},
			{
				text: "MY LOVE . . . . . . . .",
				y: 200,
				delay: 200,
				fromCurrentPosition: {y:false},
				duration: 3500
			}
		],
		{
			strokeWidth: 2,
			color: "#fff",
			fontSize: fontSize,
			textAlign: "center"
		}
	)
	
	vara.ready(function(){
		var erase = true;
		vara.animationEnd(function(i, o){
			if(i == "no_erase") erase = false;
			if(erase){
				o.container.style.transition = "opacity 0.5s 0.5s";
				o.container.style.opacity = 0;
			}
		})
	})
}

document.addEventListener('click', () => {
	createRandomFirework();
	backgroundAudio();
})