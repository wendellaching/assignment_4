var xPositions = [];
var yPositions = [];
var ballSizes = [];

function setup() {
	// create a place to draw
	createCanvas(640, 480);
	for (var i = 0; i < 10; i++) {
		xPositions[i] = random(0, 640);
		yPositions[i] = random(0, 480);
		ballSizes[i] = random(10, 30);
		noStroke();
		// noLoop();
	}
}

function draw(x, y, size) {
	background(150, 0, 0);
	for (var i = 0; i < 20; i++) {
		yPositions[i] = yPositions[i] + random(-5, 5);
		xPositions[i] = xPositions[i] + random(-5, 5);
		fill(100, 250, 250);
		ellipse(xPositions[i], yPositions[i], ballSizes[i], ballSizes[i]);
		ellipse(xPositions[i], yPositions[i], ballSizes[i] - 5, ballSizes[i] - 5);
		ellipse(xPositions[i], yPositions[i], ballSizes[i] - 10, ballSizes[i] - 10);
		ellipse(xPositions[i], yPositions[i], ballSizes[i] - 15, ballSizes[i] - 15);
		ellipse(xPositions[i], yPositions[i], ballSizes[i] - 20, ballSizes[i] - 20);
		ellipse(xPositions[i], yPositions[i], ballSizes[i] - 25, ballSizes[i] - 25);

	}
}



// }
