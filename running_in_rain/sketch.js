var drops = [];

var x = [],y = [];
const densityh = 20;
const densityv = 20;

var manx = 10;

const manwidth = 30;
const manheight = 100;

var mySlider;

var dropsHitPerson = 0;

var printOnce = true;

function setup(){
	createCanvas(600,600);
	var steph = width/densityh;
	var stepv = height/densityv;
	for(var i = 0; i < densityh; i++){
		for(var j = 0; j < densityv; j++){
			var drop = new Droplet(i*steph, j*stepv);
			drops.push(drop);
		}
	}
	
	fill(0);
	createElement('br');
	createSpan('Speed: ')
	mySlider = createSlider(0,20,1);
	createElement('br');
	var b = createButton('Run again');
	b.mousePressed(function(){
		manx = 0;
		dropsHitPerson = 0;
		printOnce = true;
	})
}

function draw(){
	background(255);
	drawRain();
	drawMan();
	calculateDropsHittingMan();
}

function drawRain(){
	drops.map(function(drop){
		drop.y += 1.2;
		if(drop.y >= height){
			drop.y = 0;
			drop.touched = false;
		}
		drop.display();
	});
}

function drawMan(){
	noStroke();
	fill('gold');
	manx += mySlider.value();
	if(manx <= width){
		rect(manx, height - manheight, manwidth, manheight);
	}
}

function calculateDropsHittingMan(){
	drops.map(function(drop){
		dropTouchesMan(drop);
	});
	if(manx > width && printOnce){
		printOnce = false;
		console.log(mySlider.value() + ':', dropsHitPerson);
	}
}

function dropTouchesMan(drop){
	if(drop.touched){
		return false;
	}
	if(drop.x < manx + manwidth && drop.x >= manx) {
		if(drop.y > height - manheight - 8 && drop.y < height){
			drop.touched = true;
			dropsHitPerson++;
			return true;
		}
	} else {
		drop.touched = false;
	}
}