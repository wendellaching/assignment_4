function setup() {
	// create a place to draw
	// frameRate(1);
	createCanvas(640, 480);
	noStroke();
	noLoop();
}

function draw() {
	// clear the background
	background(50, 10, 10);
	//  line
	if (mouseIsPressed) {
	  	stroke(255);
	  	strokeWeight(10);
	  	line(mouseX, mouseY, pmouseX, pmouseY);
	} else {
		// frameRate(1);
		fill (255,255,255);
		ellipse (mouseX,mouseY, 50,50);
		//inner circle
		fill(0,100,255);
		ellipse (mouseX, mouseY, 25,25);
	}
}
