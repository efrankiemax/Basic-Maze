// let roads=[];
let players=[];


function setup(){
createCanvas(windowWidth, windowHeight);
	let z = new player(150, windowHeight/2 - 30.7,100);
		players.push(z);
		console.log(players);
}

function draw(){
background(250);
for (var row=0; row<=2; row++) {
    push();

  for (var col=0; col<=5; col++) {
    push();
		fill(0,255,0);
    rect(100,0,2*windowWidth/11,2*windowWidth/11);
		//translate(5*windowWidth/22,0);
		translate(100,0);
			pop();
print(col);
  }
    //translate(0,15*windowHeight/17);
		translate(0,300);
		pop();
  }

	for (let i = 0; i < players.length; i++) {
		players[i].drawPlayer();
    players[i].movePlayer();
	//	players[i].diePlayer();
  }
	//gameBoard();
	finishLine();
}

class player {
	constructor(x,y,w,h){ //every ball needs an x value and a y value
		this.x = x;
  	this.y = y;
		this.w = w;
	}

	drawPlayer(){  // draw a ball on the screen at x,y
		stroke(0);
		strokeWeight(1);
    fill("red");
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
 // diePlayer(){
	//  if(b <= this.x+this.w && b>=this.x && this.y+this.w >= 0 && this.y+this.w <= d){
	// 	 noStroke();
	// 	 fill(255);
	// 	 		rect(0,0,windowWidth,windowHeight);
	// 	push();
	// 		scale(5.0);
	// 		fill(0);
	// 			text('YOU LOOSE!',windowWidth/2,windowHeight/2);//the screen goes white, but the text does not appear
	// 	pop();
	// 	}
	// }
}
function finishLine(){
	noFill();
	stroke('rgba(255,0,50, 0.25)');
	strokeWeight(30);
		ellipse(windowWidth-300,windowHeight/2-30.7,400);
	stroke(255,0,0);
	strokeWeight(10);
		ellipse(windowWidth-300,windowHeight/2-30.7,400);

	for (let i = 0; i < players.length; i++) {
		if (players[i].x >= windowWidth-500 && players[i].x <= windowWidth-100 && players[i].y >= windowHeight/2-230.7&& players[i].y <= windowHeight/2-169.3) {
			noStroke();
			fill(255);
				rect(0,0,windowWidth,windowHeight);
			textSize(100);
			fill(0);
					text('YOU WIN!',windowWidth/2-200,windowHeight/2);//the screen goes white, but the text does not appear

		}
	}
}
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
