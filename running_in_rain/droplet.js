function Droplet(x,y){
	this.x = x;
	this.y = y;

	this.display = function(){
		noStroke();
		fill(0);
		rect(this.x,this.y,1,8);
	}

	this.touched = false;
}