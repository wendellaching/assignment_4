// var myCanvas;

function setup() {
	// create a place to draw
	createCanvas(640, 480);
	background(90, 90, 110);
	noStroke();
	noLoop();
}

function draw() {
	// clear the background
	fill(0, 0,0);
	rect(40,50,225,380);

	//walls
	var leftWall = 0;
	var rightWall = 320;
	var xM = mouseX
	var yM = mouseY
	var xC = constrain(mouseX,leftWall,rightWall);
	var yC = contrain(mouseY,leftWall,rightWall);

	//draw the walls
	stroke (90,90,110);
	line(leftWall,0,leftWall,height);
	line(rightWall,0,rightWall,height);
	//lines constrained
	noStroke();
	fill(200,50,50);
	line(xC,0,23,leftWall,rightWall,height);

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



}
