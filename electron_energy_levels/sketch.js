const step = 50;
var t = 0;
var currentOrbit = 1;

var r = 0;
var r_out = 0;
var tx,ty;

var bgColor = 0;

var stopWaveFromDrawingAgain = false;

function setup(){
	createCanvas(600,600);
	background(0);
	createElement('br')
	button = createButton('Reduce Orbit');
	button.mousePressed(reduceOrbit);
	createElement('br')
	createSpan('Keep the mouse pressed to send a photon to be absorbed by the electron. Pressing the button above releases energy shown here in the form of a bright flash. After losing energy, the electron comes in a lower orbit.');
}

function draw(){
	bgColor /= 1.03;
	background(bgColor);
	drawNucleus();
	drawOrbits();
	drawElectron();
	if(mouseIsPressed){
		drawWave();
	} else {
		r = 0;
	}
	//drawWave();
}

function drawNucleus(){
	fill('white');
	noStroke();
	ellipse(width/2, height/2, 20);
	ellipse(width/2-2, height/2-2, 20);
	ellipse(width/2+3, height/2-2, 20);
	ellipse(width/2-1, height/2+1, 20);
}

function drawOrbits(){
	noFill();
	stroke('white');
	for(var i = 1; i <= 5; i++){
		ellipse(width/2, height/2, step*i*2);
	}
}

function drawElectron(){
	t += 0.15 % 4;
	var x = (width/2) + step*currentOrbit*cos(t);
	var y = (height/2) + step*currentOrbit*sin(t);
	fill('white');
	noStroke();
	ellipse(x,y,10);
}


function drawWave(){
	if(stopWaveFromDrawingAgain){
		return;
	}
	if(currentOrbit == 5){
		return;
	}
	r += 3;
	stroke('red');
	noFill();
	ellipse(0, height/2, 2*r);
	if (r >= width/2 - step*currentOrbit){
		currentOrbit++;
		stopWaveFromDrawingAgain = true;
		r = 0;
	}
}

function mouseReleased(){
	stopWaveFromDrawingAgain = false;
}

function reduceOrbit(){
	if(currentOrbit > 1){
		bgColor = 255;
		currentOrbit--;
	}
}