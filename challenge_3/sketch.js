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
	fill(0, 0,0);
	rect(40,50,225,380);

	//walls
	var leftWall = 0;
	var rightWall = 240;
	var xM = mouseX - 150;
	var yM = mouseY;
	var xC = constrain(mouseX,leftWall,rightWall);
	var yC = constrain(mouseY,leftWall,rightWall+150);

	//draw the walls
	noFill();
	line(leftWall,0,leftWall,height);
	line(rightWall,0,rightWall,height);

	//lines constrain
	stroke(200,50,50);
	strokeWeight(15);
	line(20+xC, 20+yC, 85+xC, 85+yC);
	line(20+xC, 85+yC, 85+xC, 20+yC);

}



	//x
	// fill(200,50,50);
	// translate(width/2, height/2);
	// rotate(PI/4.0);
	// rect(mouseX, 30, mouseY, 20, 25, 115, 20);
	// translate(width/-2, height/2);
	// rotate(PI/-2.0);
	// rect(mouseX, 150, mouseY, 309, 25, 115, 20);
	//
	// myCanvas.position(windowWidth/2, winMouseY+1);
