var square = [];
var drop;

function setup() {
  createCanvas(640, 1000);
  reset();
} 

function draw() {
  background(127);
    
    for (var i = 0; i < square.length; i++) {
      var gravity = createVector(0, 0.1*square[0].mass);
      
      if(drop===true){
        square[i].applyForce(gravity);
        square[i].update();
        square[i].display();
        square[i].checkEdges();
      } 
      else{
        square[i].display();
      }
    } 
}

function mousePressed() {
  if(mouseX>=100 && mouseX<=200 && mouseY>=100 && mouseY<=120){
    drop = true;
    reset();
  }; 
}

function reset() {
  square[0] = new Mover(1, mouseX, mouseY);
}

function Mover(m,x,y) {
  this.visible = true;
  this.mass = m;
  this.position = createVector(100, 100);
  this.velocity = createVector(0,0);
  this.acceleration = createVector(0,0);
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
  strokeWeight(3);
  fill(200,200);
  if(drop===true){
    rect(this.position.x,this.position.y,this.mass*100,this.mass*20);
  }
  else{
    rect(100,100,100,20);
  }
};

Mover.prototype.checkEdges = function() {
  if (this.position.y > (height - this.mass*10)) {
    this.velocity.y = 0;
    this.position.y = 1000;
  }
};


