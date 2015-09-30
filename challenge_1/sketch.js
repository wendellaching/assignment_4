var xPositions = [];
var yPositions = [];

function setup () {
		createCanvas(640,480);
		noStroke();
		noLoop();
		colorMode(RGB);
		background (100,190,250);
		//grass
		fill(40,180,50);
		rect(0,280,640,200);

		for (var i = 0; i < 30; i++){
				xPositions[i] = random(0,640);
				yPositions[i] = random(200,450);
		}
}

function draw( x,y, size) {
		var size = 30;
		for (var i = 0; i < 30; i++){
				//stems
				fill(0,120,10);
				rect(xPositions[i],yPositions[i], 05, 110, 20);
				//first flower circle
				fill(255,255,255,80);
				ellipse(xPositions[i]+2, yPositions[i]+2, size-20,size-20);
		}
}
