// challenge_2.js

// In this challenge a ball bounces around the screen.
// The ball bounces when it hits the side of the canvas
// and when it hits a mouse controlled paddle.

// This challenge contains multiple syntax, runtime, and
// logical errors. Find and fix the errors to make it work.


// ball: a data object to hold info about the ball
var ball = {
	x: 500,
	y: 100,
	speedX: 5,
	speedY: 5,
	radius: 25,
}

// paddle: a data object to hold info about the ball
var paddle = {
	x: 0,
	y: 350,
	width: 300,
	height: 30,
}


// setup: called by p5 once at startup
function setup() {
	createCanvas(640, 480);
	noStroke();
}

function draw() {

	updateBall);
	paddle.x = mouseY;
	background(50, 50, 50);
	ellipse(ball.x, ball.y, ball.radius * 2, ball.radius * 2);
	rect(paddle.x - paddle.width * 0.5, paddle.y, paddle.width, paddle.height);
}

function updateBall(){
	// change position
	ball.x = ball.x + ball.speedX;
	ball.y = ball.y + ball.speedY;

	// right
	if (ball.x > 640 - ball.radius) {
			ball.speedX = - ball.speedX;
	}

	// bottom
	if (ball.y > 480 - ball.radius) {
			ball.speedY = - ball.speedY;
	}

	// left
	if (ball.x < 0 + ball.radius) {
			ball.speedX = - ball.speedX;
	}

	// top
	if (ball.y < 0 + ball.radius) {
			ball.speedY = - ball.speedY;
	}

	// check for a *collision* between the ball and the paddle
	// look up the && operator

	if (ball.x > (paddle.x - paddle.480 * 0.5) && ball.x < (paddle.x + paddle.480 * 0.5) && ball.y > paddle.y - ball.radius) {
		if (ball.speedY > 0) {
			ball.speedY = - ball.speedY;
		}
	}
}
