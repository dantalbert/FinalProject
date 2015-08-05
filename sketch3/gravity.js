var square = [];

function setup() {
  createCanvas(640, 1000);
  reset();
}

function draw() {
  background(127);
    
    for (var i = 0; i < square.length; i++) {
      square[i].update();
      square[i].display();
      square[i].stop();
    } 
}

function mousePressed() {
  reset();
}

function reset() {
  square[0] = new Mover(2, mouseX, mouseY);
}

function Mover(d,x,y) {
  this.distance = d;
  this.position = createVector(mouseX, mouseY);
  this.velocity = createVector(d, 0);
  this.acceleration = createVector(d, 0);
}

Mover.prototype.update = function() {
  this.distance = this.position.x - mouseX;
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
};

Mover.prototype.display = function() {
  stroke(1);
  strokeWeight(3);
  fill(200,200);
  rect(this.position.x,this.position.y,abs(this.distance),abs(this.distance));
};

Mover.prototype.stop = function() {
  if (this.position.x > width/3) {
    this.velocity.x = 0;  
  }
};

