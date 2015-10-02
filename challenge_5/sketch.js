function setup() {
	// create a place to draw
	createCanvas(640, 480);
	noStroke();
	noLoop();
}

function draw() {
	// clear the background
	background(50, 10, 10);
	// set fill color for inner circle
	fill(0,100,255);

	// draw the ellipse
	var diameter = random(100, 200);
	ellipse(320, 180, diameter, diameter);
}
