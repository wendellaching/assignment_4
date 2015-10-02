function setup() {
	// create a place to draw
	createCanvas(640, 480);
	noStroke();
	noLoop();
	frameRate(10);
}

function draw() {
	// clear the background
	background(50, 10, 10);
			stroke(255);
			strokeWeight(10);
			line(mouseX, mouseY, pmouseX, pmouseY);
			print(pmouseX + " -> " + mouseX);
		}
	// set fill color for inner circle
	fill(0,100,255);

	// draw the ellipse
	var diameter = random(100, 200);
	ellipse(320, 180, diameter, diameter);
}
