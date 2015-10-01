var xPositions = [];
var yPositions = [];

function setup() {
	// create a place to draw
	createCanvas(640, 480);
	for (var i = 0; i < 10; i++){
		xPositions[i] = random(0, 640);
		yPositions[i] = random(0, 480);
	}
	noStroke();
	noLoop();
}

function draw() {
	// clear the background
	background(150,0,0);
	fill(100, 250, 250);
	for (var i = 0; i < 10; i++){
		xPositions[i] = xPositions[i] + random(-2, 2);
		yPositions[i] = yPositions[i] + random(-2, 2);

		ellipse(xPositions[i], yPositions[i], 10, 10);
	}
}





// // a simple p5 sketch that draws an ellipse
// var xPositions = [];
// var yPositions = [];
//
// function setup() {
// 	createCanvas(640, 480);
// 	for (var i = 0; i < 10; i++){
// 		xPositions[i] = random(0, 640);
// 		yPositions[i] = random(0, 480);
//
// 	}
// }
//
// function draw() {
// 	background(125, 125, 125);
//
// 	for (var i = 0; i < 10; i++){
// 		xPositions[i] = xPositions[i] + random(-2, 2);
// 		yPositions[i] = yPositions[i] + random(-2, 2);
//
// 		ellipse(xPositions[i], yPositions[i], 10, 10);
// 	}
// }
