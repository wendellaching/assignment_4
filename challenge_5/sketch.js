var a = 0
	var b = 0

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
	if (!mouseIsPressed) {
		a = mouseX;
		b = mouseY;
	} else {
fill(255, 255, 255);
stroke(255);

line(a, b, mouseX, mouseY);

}
if (mouseIsPressed){
fill(0, 100, 255);
stroke(255);
	ellipse(a, b, 50, 50);
}

fill(0, 100, 255);
stroke(255);
	// draw an ellipse
	ellipse(mouseX, mouseY, 50, 50);
}
