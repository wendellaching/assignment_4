
var ball = {
	x: 500,
	y: 100,
	speedX: 5,
	speedY: 5,
	radius: 25,
};

// paddle: a data object to hold info about the ball
var paddle = {
	x: 0,
	y: 350,
	width: 300,
	height: 30,
};


// setup: called by p5 once at startup
function setup() {
	createCanvas(640, 480);
	noStroke();
}

function draw() {
	updateBall;
	paddle.x = mouseX;
	background(50, 50, 50);
	ellipse(ball.x, ball.y, ball.radius * 2, ball.radius * 2);
	rect(mouseX, paddle.y,paddle.width, paddle.height);
}

function updateBall() {
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

	if (ball.x > (paddle.x - paddle.width) && ball.x < (paddle.x + paddle.width) && ball.y > paddle.y - ball.radius) {
		if (ball.speedY > 0) {
			ball.speedY = - ball.speedY;
		}
	}
}
