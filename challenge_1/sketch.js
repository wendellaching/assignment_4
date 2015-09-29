var xPositions = [];
var yPositions = [];

function setup () {
		createCanvas(640,480);
		noStroke();
		noLoop();
		colorMode(RGB);
		for (var i = 0, i < 30; i++){
				xPositions[i] = random(0,640);
				yPositions[i] = random(200,450);
		}
}
function draw() {
		background (100,190,250);
		for (var i = 0; i < 10; i++){
		xPositions[i] = xPositions[i] + random(-2, 2);
		yPositions[i] = yPositions[i] + random(-2, 2);
		//grass foreground
		fill(40,180,50);
		rect(0,280,640,200);
}
