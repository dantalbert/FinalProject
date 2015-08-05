var square = [];

function setup() {
  createCanvas(640, 1000);
  reset();
}

function draw() {
  background(127);
    
    c = color(255, 204, 0);  
    fill(c);  
    noStroke(); 
    rect(0, 0, 50, 50);  
    
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
    posX = mouseX;
    if(mouseX < 50 && mouseX > 0 && mouseY < 50){
      square[0] = new Mover(2, mouseX, mouseY);
    }
}

function Mover(d,x,y) {
  this.distance = d;
  this.position = createVector(mouseX, mouseY);
  this.velocity = createVector(d, 0);
  this.acceleration = createVector(4, 0);
}

Mover.prototype.update = function() {
  this.distance = this.position.x;
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
};

Mover.prototype.display = function() {
  c = color(255, 204, 0);  
  fill(c); 
  rect(this.position.x,this.position.y,abs(this.distance),abs(this.distance*2));
};

Mover.prototype.stop = function() {
  if (this.position.x > width/3) {
    this.velocity.x = 0;  }
};

