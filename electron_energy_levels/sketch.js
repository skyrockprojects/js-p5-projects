const step = 50;
var t = 0;
var currentOrbit = 1;

var r = 0;
var bgColor = 0;

var stopWaveFromDrawingAgain = false;

function setup(){
	createCanvas(600,600);
	background(0);
	createElement('br')
	button = createButton('Reduce Orbit');
	button.mousePressed(reduceOrbit); // when mouse pressed the button, it will active "reduceOrbit" fucntion
	createElement('br')
	createSpan('Keep the mouse pressed to send a photon to be absorbed by the electron. Pressing the button above releases energy shown here in the form of a bright flash. After losing energy, the electron comes in a lower orbit.');
}

function draw(){
	bgColor /= 1.03;// because bgColor will turn white by creating the flash,so it will set up bgcolor from white and then excute "bgColor /= 1.03;" fading into black
	background(bgColor);
	drawNucleus();
	drawOrbits();
	drawElectron();
	if(mouseIsPressed){//press will draw the wave
		drawWave();
	} else {// don't press will draw nothing 
		r = 0;
	}
}

function drawNucleus(){
	fill('white');
	noStroke();
	//draw four ellipse in close area to look like nucleus
	ellipse(width/2, height/2, 20);
	ellipse(width/2-2, height/2-2, 20);
	ellipse(width/2+3, height/2-2, 20);
	ellipse(width/2-1, height/2+1, 20);
}

function drawOrbits(){
	//draw five circle by ellipse with nofill and white stroke
	noFill();
	stroke('white');
	for(var i = 1; i <= 5; i++){
		ellipse(width/2, height/2, step*i*2); //"step" is a constant variable to creat atomic orbitals 
		//width/2, height/2 make the orbits draw from the middle
		//step*i*2 times 2 just for diameter to fit x,y values of "drawElectron()
	}
}

function drawElectron(){
	t += 0.15 % 4;
	//+=0.15 means t += 0.15 is short for t = t + 0.15, it can control the speed, smaller will faster.
	//%4 means divide the remainder by four, it just used for control the value of t stay in cycles 
	//0, 0.15, 0.3, 0.45, ..., 3.9, 0.05, ...
	var x = (width/2) + step*currentOrbit*cos(t);//start from (width/2) 
	var y = (height/2) + step*currentOrbit*sin(t);//start from (height/2) 
	fill('white');
	noStroke();
	ellipse(x,y,10);
}


function drawWave(){
	if(stopWaveFromDrawingAgain){//because of the "if (r >= width/2 - step*currentOrbit)", it will know the wave reach the level of current orbit
		return;///ask computer to do nothing. 
	}
	if(currentOrbit == 5){//when the ekectron stay in level 5 then you do nothing
		return;//ask computer to do nothing, it's a request. Otherwise it will continue the orignal logic
	}
	r += 3;// is short for r = r + 3, it control the speed of radius of the wave
	stroke('red');
	noFill();
	ellipse(0, height/2, 2*r);//0, height/2 means start point, 2*r means diameter
	if (r >= width/2 - step*currentOrbit){//when the wave reach the orbit which current electron is on it will do someting
		currentOrbit++;//constant variable to store the level of electron
		stopWaveFromDrawingAgain = true;// it change to true then first if will make it not to draw
		r = 0;//initial the radius 
	}
}

function mouseReleased(){
	stopWaveFromDrawingAgain = false;
}

function reduceOrbit(){
	if(currentOrbit > 1){//control limitation level of the orbit is one 
		bgColor = 255;//creat the flash, set up bgcolor from white and then excute bgColor /= 1.03; fading into black
		currentOrbit--;
	}
}
