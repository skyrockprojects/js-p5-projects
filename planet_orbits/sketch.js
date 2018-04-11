const PI = 3.1415926535;
const PI2 = PI*2;//one lap

const tickRates = [PI2/87.97, PI2/224.70, PI2/365.26, PI2/686.98, PI2/4332.82, PI2/10755.70, PI2/30687.15, PI2/60190.03];
const distancesFromSun = [0.39, 0.723, 1, 1.524, 5.203, 9.539, 19.18, 30.06];
const planetSizes = [4.878, 12.104, 12.756, 6.787, 142.796, 120.660, 51.118, 48.600];

var mySlider, mySpan;

var times;

function setup(){
	createCanvas(1000,800);
	background('black');

	times = [0,0,0,0,0,0,0,0];
	
	createElement('br');
	mySpan = createSpan('Number of planets to display:');
	mySlider = createSlider(2,8,3,1)
}

function draw(){
	background('black');
	drawSun();
	mySpan.html('Number of planets to display: (' + mySlider.value() + ')');
	for(var i = 0; i < mySlider.value(); i++){
		drawPlanet(i);
	}
}

function drawSun(){
	fill('gold');
	ellipse(width/2,height/2,10);
}

function drawPlanet(index){
	var multiplier = width/(2 * distancesFromSun[mySlider.value() - 1]) - 10;
	var a = multiplier * distancesFromSun[index];
	var b = a * 0.7;
	times[index] = times[index] - tickRates[index];//negative will make orbits go counterclockwise
	x = width/2 + a * cos(times[index]);//width/2 means initial place
	y = height/2 + b * sin(times[index]);//height/2 means initial place
	fill('white');
	var size = 4 * log(planetSizes[index]);//number is for controling the size
	ellipse(x,y,size);
}
