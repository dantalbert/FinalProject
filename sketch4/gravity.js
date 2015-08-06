var square = [];

function setup() {
  createCanvas(640, 1000);
}

function draw() {
  background('#A3BBAD');

    noStroke();
    fill("#357266");
    rect(15, 10, 20, 20);
    rect(100, 320, 30, 30)
    rect(50, 500, 24, 24)
    rect(450, 920, 35, 35)
    rect(325, 200, 15, 15)
    rect(480, 460, 41, 41)
    rect(288, 912, 12, 12)

  for (var i = 0; i < square.length; i++) {
    var gravity = createVector(0, 0.1*square[0].mass);
    square[i].applyForce(gravity);
    square[i].update();
    square[i].display();
    square[i].checkEdges(); 
  } 

 fill("#0E3B43");
    ellipse(100, 100, 20, 20)
    ellipse(220, 700, 37, 37)
    ellipse(550, 75, 25, 25)
    ellipse(312, 515, 10, 10)
    ellipse(22, 900, 13, 13)
    ellipse(524, 775, 18, 18)
    ellipse(388, 350, 30, 30)

}


function mousePressed() {
  reset();
}

function reset() {
		var newSquareIndex = square.length;
    square[newSquareIndex] = new Mover(2, mouseX,mouseY,newSquareIndex);
}

function Mover(m,x,y,n) {
  this.mass = m;
  this.position = createVector(x, y);
  this.velocity = createVector(0,0);
  this.acceleration = createVector(0,0);
  this.number = n;
}

Mover.prototype.applyForce = function(force) {
  var f = p5.Vector.div(force,this.mass);
  this.acceleration.add(f);
};
  
Mover.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
};

Mover.prototype.display = function() {
  noStroke();
  fill("#65532F");
  rect(this.position.x,this.position.y,this.mass*10,this.mass*10);
};

Mover.prototype.checkEdges = function() {
  if (this.position.y > (height - this.mass*10)) {
  	var squareToRemove = this.number;
  	for (var i = 0; i < square.length; i++) {
      if (square[i].number > squareToRemove) {
      	square[i].number = square[i].number - 1;
      } 
    } 
  	square[squareToRemove] = null;
  	square.splice(squareToRemove,1);    
  }
};


