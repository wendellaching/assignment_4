var xPositions = [];
var yPositions = [];

function setup() {
	// create a place to draw
	createCanvas(640, 480);
	for (var i = 0; i < 10; i++){
		xPositions[i] = random(0, 640);
		yPositions[i] = random(0, 480);
	noStroke();
	// noLoop();
		}
}

function draw(x,y,size) {
	background(150,0,0);
	fill(100, 250, 250);
		// var size = 20;
		for (var i = 0; i < 10; i++){
			yPositions[i] = yPositions[i] + random(-4, 4);
			ellipse(xPositions[i]+ 2.5, yPositions[i]+2.5, 40, 40);
			xPositions[i] = xPositions[i] + random(-10,10);
			ellipse(xPositions[i]+70, yPositions[i] + 70, 30, 30);
			xPositions[i] = xPositions[i]
			ellipse(xPositions[i]+80, yPositions[i], 20, 20);

		}
}






// }
