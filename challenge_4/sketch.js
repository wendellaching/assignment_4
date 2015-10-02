var xPositions = [];
var yPositions = [];
var ballSizes = [];
// var colors = [];


function setup() {
	// create a place to draw
	createCanvas(640, 480);
	for (var i = 0; i < 10; i++){
		xPositions[i] = random(0, 640);
		yPositions[i] = random(0, 480);
		ballSizes [i] = random(10,30);
		// colors[i] = color(random(255), random(255), random(255));


		noStroke();
	// noLoop();
		}
}

function draw(x,y,size) {
	background(150,0,0);
	// fill(100, 250, 250);
		// var size = 20;
		for (var i = 0; i < 10; i++){
			yPositions[i] = yPositions[i] + random(-2, 2);
			xPositions[i] = xPositions[i] + random(-2,2);
			fill(100, 250, 250);
			ellipse(xPositions[i], yPositions[i], ballSizes[i], ballSizes[i]);
		}
}






// }
