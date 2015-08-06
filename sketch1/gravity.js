var square = [];
var drop;

function setup() {
  createCanvas(600, 1000);

  reset();
} 

function draw() {
  //background(127);
    background('#8BBCBB');

    fill('#3B0763');
    noStroke();
    rect(100, 400, 400, 200);
    rect(100, 0, 400, 50);
    
    fill('#090C3A');
    rect(100, 300, 400, 75);
    rect(100, 700, 400, 500);
    rect(100, 100, 150, 50);
    rect(350, 100, 150, 50)
    
    for (var i = 0; i < square.length; i++) {
      var gravity = createVector(0, 0.1*square[i].mass);  
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
  if(mouseX>=250 && mouseX<=350 && mouseY>=100 && mouseY<=150){
    drop = true;
    reset();
  }; 
}

function reset() {
  square[0] = new Mover(1, mouseX, mouseY);
}

function Mover(m,x,y) {
  this.mass = m;
  this.position = createVector(250, 100);
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
  noStroke();
  fill('#196696');
  if(drop===true){
    rect(this.position.x,this.position.y,this.mass*100,this.mass*50);
  }
  else{
    rect(250,100,100,50);
  }
};

Mover.prototype.checkEdges = function() {
  if (this.position.y > (height - this.mass*10)) {
    square[0] = null;
  }
};


