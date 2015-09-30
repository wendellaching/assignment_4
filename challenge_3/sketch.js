var myCanvas;

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
	rect(40,50,250,380);
	myCanvas = (320,480);

	// x
	fill(200,50,50);
	translate(width/2, height/2);
	rotate(PI/4.0);
	rect(30, 20, 25, 115, 20);
	translate(width/-2, height/2);
	rotate(PI/-2.0);
	rect(150, 309, 25, 115, 20);

	myCanvas.position(windowWidth/2, winMouseY+1);



}
