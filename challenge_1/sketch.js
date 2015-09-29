function setup() {
	// create a place to draw
	createCanvas(640, 480);
	colorMode(RGB);
	noStroke();
	noLoop();

}

function draw() {
	// clear the background
	background(100, 190, 250);
	//fill for grass
	fill(40,180,50);
	rect(0,280,640,200);
	//random flowers
	drawFlower(random(0,640), random(0,280),50);
	drawFlower(random(0,640), random(0,280),40);
	drawFlower(random(0,640), random(0,280),30);
	drawFlower(random(0,640), random(0,280),20);
	drawFlower(random(0,640), random(0,280),10);
}

function drawFlower(x,y,size) {
	//stems of flower
	var i = 10;
	for (var i=0; i<10; i++){
			fill(0,120,10);
			rect(random(0,640), random(450,240), 05, 110,20);
	//first ring
			fill(255,255,255,80)
			ellipse(random(0,640),random(450,240),10,10);

	//second ring

}


//
// 	// // set a fill color
// 	// fill(255, 255, 255);
// 	//
// 	// // draw the ellipse
// 	// var diameter = random(100, 200);
// 	// ellipse(320, 180, diameter, diameter);
}
