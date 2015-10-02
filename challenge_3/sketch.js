// var myCanvas;

function setup() {
	// create a place to draw
	createCanvas(640, 480);
	noStroke();
	// noLoop();
}

function draw() {
	// clear the background
	background(90, 90, 110);
	fill(0, 0, 0);
	rect(40, 50, 225, 380);

	//walls
	var leftWall = 0;
	var rightWall = 380;
	var xM = mouseX;
	var yM = mouseY;
	var xC = constrain(mouseX, leftWall, rightWall - 170);
	var yC = constrain(mouseY, leftWall, rightWall);

	//draw the walls
	noFill();
	line(leftWall, 0, leftWall, height);
	line(rightWall, 0, rightWall, height);

	//lines constrain
	stroke(200, 50, 50);
	strokeWeight(15);
	line(20 + xC, 20 + yC, 85 + xC, 85 + yC);
	line(20 + xC, 85 + yC, 85 + xC, 20 + yC);

}
