// Cursor from gsap import *

const { gsap } = window;

const cursorOuter = document.querySelector(".cursor--large");
const cursorInner = document.querySelector(".cursor--small");
let isStuck = false;
let mouse = {
	x: -100,
	y: -100,
};

// Just in case you need to scroll
let scrollHeight = 0;
window.addEventListener('scroll', function (e) {
	scrollHeight = window.scrollY
})

let cursorOuterOriginalState = {
	width: cursorOuter.getBoundingClientRect().width,
	height: cursorOuter.getBoundingClientRect().height,
};
const buttons = document.querySelectorAll("main button");

buttons.forEach((button) => {
	button.addEventListener("pointerenter", handleMouseEnter);
	button.addEventListener("pointerleave", handleMouseLeave);
});

document.body.addEventListener("pointermove", updateCursorPosition);
document.body.addEventListener("pointerdown", () => {
	gsap.to(cursorInner, 0.15, {
		scale: 2,
	});
});
document.body.addEventListener("pointerup", () => {
	gsap.to(cursorInner, 0.15, {
		scale: 1,
	});
});

function updateCursorPosition(e) {
	mouse.x = e.pageX;
	mouse.y = e.pageY;
}

function updateCursor() {
	gsap.set(cursorInner, {
		x: mouse.x,
		y: mouse.y,
	});

	if (!isStuck) {
		gsap.to(cursorOuter, {
			duration: 0.15,
			x: mouse.x - cursorOuterOriginalState.width / 2,
			y: mouse.y - cursorOuterOriginalState.height / 2,
		});
	}

	requestAnimationFrame(updateCursor);
}

updateCursor();

function handleMouseEnter(e) {
	isStuck = true;
	const targetBox = e.currentTarget.getBoundingClientRect();
	gsap.to(cursorOuter, 0.2, {
		x: targetBox.left,
		y: targetBox.top + scrollHeight,
		width: targetBox.width,
		height: targetBox.width,
		borderRadius: 0,
		backgroundColor: "rgba(255, 255, 255, 0.1)",
	});
}

function handleMouseLeave(e) {
	isStuck = false;
	gsap.to(cursorOuter, 0.2, {
		width: cursorOuterOriginalState.width,
		height: cursorOuterOriginalState.width,
		borderRadius: "50%",
		backgroundColor: "transparent",
	});
}

// use Loading

document.getElementById("backgroundblur").style.opacity = 1;
document.getElementById("backgroundblur").style.display = "block";

const ClassLoading = document.getElementById("Loading");
const TransparentLogo = document.getElementById("TransparentLogo");

setTimeout(() => {

	TransparentLogo.style.opacity = 0;
	TransparentLogo.style.transition = "0.3s";

	setTimeout(() => {
		// ClassLoading.style.opacity = 0;
		ClassLoading.style.transform = "translateY(-100%)";
	}, 350);

	setTimeout(() => {
		document.getElementById("backgroundblur").style.opacity = 0;
		document.getElementById("backgroundblur").style.transition = "1s";
		setTimeout(() => {
			document.getElementById("backgroundblur").style.display = "none";
			document.getElementById("backgroundblur").style.transition = "0.3s";
		}, 600);
	}, 1000);

	setTimeout(() => {
		TransparentLogo.style.display = "none";
		ClassLoading.style.display = "none";
	}, 1300);

}, 1420);