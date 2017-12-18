var particleSize;
var x,y;
var stepSlider;
var mySpan;

function setup(){
	createElement('h3','Brownian Motion');
	createCanvas(600, 400);

	//settings to draw outer rect
	stroke('black');
	noFill();
	rect(30,20,600-60,400-60);

	//settings to draw particle
	fill('black');
	x = 300;
	y = 200;
	particleSize = 2;
	ellipse(x,y,particleSize);

	//create text
	createElement('br');
	mySpan = createSpan('Step size: ');

	//draw slider
	stepSlider = createSlider(1,10,3);
	stepSlider.position(100,465);

	createP('Step size is the max distance the particle can cover in any direction.');
}

function draw(){
	var stepSize = stepSlider.value();
	mySpan.html('Step size: (' + stepSize + ')');

	//Calculate new values of x and y
	x = x + random(-stepSize, stepSize);
	y = y + random(-stepSize, stepSize);
	ellipse(x,y,particleSize);
}