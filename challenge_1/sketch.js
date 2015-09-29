function setup() {
	// create a place to draw
	createCanvas(640, 480);
	noStroke();
	noLoop();
}

function draw() {
	// clear the background
	background(100, 190, 250);

	// set a fill color
	fill(255, 255, 255);

	// draw the ellipse
	var diameter = random(100, 200);
	ellipse(320, 180, diameter, diameter);
}
