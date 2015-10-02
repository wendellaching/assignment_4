var mouseUpX = 0
var mouseUpY = 0
var ellipseSize = 50

function setup() {
	// create a place to draw
	// frameRate(1);
	createCanvas(640, 480);
	// noStroke();
	//noLoop();
}

function draw() {
	background(50, 10, 10);
	strokeWeight(10);
	//if mouse is up, need to store location
	if (!mouseIsPressed) {
		a = mouseX;
		b = mouseY;
	} else {
		fill(255, 255, 255);
		stroke(255);
		line(a, b, mouseX, mouseY);
	}
	if (mouseIsPressed) {
		fill(0, 100, 255);
		stroke(255);
		ellipse(a, b, ellipseSize, ellipseSize);
	}
	fill(0, 100, 255);
	stroke(255);
	// draw an ellipse
	ellipse(mouseX, mouseY, ellipseSize, ellipseSize);
}
