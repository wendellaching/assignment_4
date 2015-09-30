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
		for (var i = 0; i < 40; i++){
				xPositions[i] = random(0,640);
				yPositions[i] = random(200,450);
		}
}

function draw( x,y, size) {
		var size = 40;
		for (var i = 0; i < 40; i++){
				//stems
				fill(0,120,10);
				rect(xPositions[i],yPositions[i], 05, 110, 20);
				//first flower circle
				fill(255,255,255,100);
				ellipse(xPositions[i]+2.5, yPositions[i]+2.5, size-25,size-25);
				//second circle
				fill(255,255,255,90);
				ellipse(xPositions[i]+2.5, yPositions[i]+2.5, size-15,size-15);
				//third circle
				fill(255,255,255,80);
				ellipse(xPositions[i]+2.5, yPositions[i]+2.5, size-05,size-05);
				//fourth circle
				fill(255,255,255,70);
				ellipse(xPositions[i]+2.5, yPositions[i]+2.5, size+5,size+05);
				// //fifth circle
				// fill(255,255,255,60);
				// ellipse(xPositions[i]+2.5, yPositions[i]+2.5, size+15,size+15);


		}
}
