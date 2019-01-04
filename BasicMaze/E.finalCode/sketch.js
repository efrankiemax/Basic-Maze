let players=[];
let a;
let b;
let c;

function setup(){
	createCanvas(windowWidth,windowHeight);
	background(255);
		let z = new player(windowWidth/2,windowHeight/2);
		players.push(z);
		console.log(players);
}

function draw(){
background(255);
	for (let i = 0; i < players.length; i++) {
		players[i].drawPlayer(); //do I need to add the coordinates?
    players[i].movePlayer();
	//	players[i].diePlayer();
  }
 obstacle(windowWidth/2-100,0,200);
}


class player {
	constructor(x,y,w){ //every ball needs an x value and a y value
		this.x = x;
  	this.y = y;
		this.w = w;
	}

	drawPlayer(){  // draw a ball on the screen at x,y
		stroke(0);
		strokeWeight(1);
    fill(0,0,255);
		rect(this.x,this.y,this.w,this.w);
		if (this.w >= 50 && keyIsDown(189)){
			this.w = .95*this.w;
		}
	}

	movePlayer(){
		if (keyIsDown(RIGHT_ARROW)) {
			this.x = this.x +10;
		}

		if (keyIsDown(LEFT_ARROW)) {
			this.x = this.x -10;
		}

		if(keyIsDown(UP_ARROW)){
			this.y = this.y -10;
		}

		if(keyIsDown(DOWN_ARROW)){
			this.y = this.y +10;
		}
  }
 // diePlayer(){ //this is not working. I want it to create a white screen that says "you loose" when the player comes into contact with a line, right now it is not reacting at all.
	//  if(b <= this.x+this.w && b>=this.x && this.y+this.w >= 0 && this.y+this.w <= d){
	// 	 noStroke();
	// 	 fill(255);
	// 	 		rect(0,0,windowWidth,windowHeight);
	// 	push();
	// 		scale(5.0);
	// 		fill(0);
	// 			text('YOU LOOSE!',windowWidth/2,windowHeight/2);//the screen goes white, but teh text does not appear
	// 	pop();
	// 	}
	// }
}

// function loosePoints(){
// 	let p = 10;
// 	if(mouseX>=x && mouseX<=x+w && mouseY>=y && mouseY<=y+w){
// 		print('I work')
// 		fill(255,0,0);
// 			rect(x,y,w,w);
// 		p = p-1
// 	}
// }

// function grandure() {
// 	let c = [60,-60];
// 	c = random(c);
// 	print(c);
// 	for(i=0; i<2; i++){
// 		for(let y =round(random(0,windowHeight/2 +75)); y>=0 && y<=windowHeight/2 +75; y+c){
// 			for(let x =round(random(0,windowWidth/2 +75)); x>=0 && x<=windowWidth/2 +75; x+c){
// 				rect(x,y);
// 			}
// 		}
// 	}
// }

function obstacle(a,b,c){
this.a = a
this.b = b
this.c = c
	fill(0,255,0);
		rect(a,b,c,c);
	if(mouseX>=a && mouseX<=a+c && mouseY>=b && mouseY<=b+c){
		fill(255,0,0);
			rect(a,b,c,c);
}
}
