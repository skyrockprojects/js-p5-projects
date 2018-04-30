// planet info: https://www.windows2universe.org/?page=/our_solar_system/planets_table.html
// sin cos motion explained visually: http://setosa.io/ev/sine-and-cosine/
// to do: add orbital eccentricities; lerp; moons n' comets; 3D; timescale;

const PI = 3.1415926535;

//one lap
const PI2 = PI*2;

// days to complete one orbit
const tickRates = [PI2/87.97, PI2/224.70, PI2/365.26, PI2/686.98, PI2/4332.82, PI2/10755.70, PI2/30687.15, PI2/60190.03];
// distance in AU (astronomical units where Earth's distance - 149,597,871 km (92,955,807 miles) - equals 1)
const distancesFromSun = [0.39, 0.723, 1, 1.524, 5.203, 9.539, 19.18, 30.06];
// diameter in km
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
	
	// iterate through each planet
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
	//negative will make orbits go counterclockwise
	times[index] = times[index] - tickRates[index];
	
	//width/2 means initial place
	x = width/2 + a * cos(times[index]);
	//height/2 means initial place
	y = height/2 + b * sin(times[index]);
	
	noStroke();
	fill(200, 200, 150);
	var size = 4 * log(planetSizes[index]);//number is for controling the size
	ellipse(x,y,size);

    
    // Trace orbits - NOTE: more points will result in smoother circle
    // Challenge - write this more efficiently as an iterative function
    var x1 = width/2 + a * cos(PI2*0);
    var y1 = height/2 + b * sin(PI2*0);
    var x2 = width/2 + a * cos(PI2*1/7);
    var y2 = height/2 + b * sin(PI2*1/7);
    var x3 = width/2 + a * cos(PI2*2/7);
    var y3 = height/2 + b * sin(PI2*2/7);
    var x4 = width/2 + a * cos(PI2*3/7);
    var y4 = height/2 + b * sin(PI2*3/7);
    var x5 = width/2 + a * cos(PI2*4/7);
    var y5 = height/2 + b * sin(PI2*4/7);
    var x6 = width/2 + a * cos(PI2*5/7);
    var y6 = height/2 + b * sin(PI2*5/7);
    var x7 = width/2 + a * cos(PI2*6/7); 
    var y7 = height/2 + b * sin(PI2*6/7);
    var x8 = width/2 + a * cos(PI2); 
    var y8 = height/2 + b * sin(PI2);
    var x9 = width/2 + a * cos(PI2*8/7); 
    var y9 = height/2 + b * sin(PI2*8/7);
    var x10 = width/2 + a * cos(PI2*9/7); 
    var y10 = height/2 + b * sin(PI2*9/7);
    
    noFill();
    stroke(200, 40);
    strokeWeight(size)
    beginShape()
    curveVertex(x1, y1);
    curveVertex(x2, y2);
    curveVertex(x3, y3);
    curveVertex(x4, y4);
    curveVertex(x5, y5);
    curveVertex(x6, y6);
    curveVertex(x7, y7);
    curveVertex(x8, y8);
    curveVertex(x9, y9);
    curveVertex(x10, y10);
    endShape();

    

}
