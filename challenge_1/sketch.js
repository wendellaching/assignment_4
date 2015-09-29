function setup() {
	// create a place to draw
	createCanvas(640, 480);
	noStroke();
}

function draw() {
	// clear the background
	background(100, 190, 250);
	//fill for grass
	fill(40,180,50);
	rect(0,280,640,200);
	//random flowers
	drawFlower(random(0,640), random(0,280),340, 150);

function drawFlower(x,y,size) {
	//stems of flower
	fill(0,120,10);
	rect(30, 20, 05, 110, 20);
}

	// // set a fill color
	// fill(255, 255, 255);
	//
	// // draw the ellipse
	// var diameter = random(100, 200);
	// ellipse(320, 180, diameter, diameter);
}
