var winkel;
var start;
var radius;
var angle = 0;
var angleSpeed = 0.157;

function setup() {
  createCanvas(600, 600);
  background(245);
  winkel = PI;
  radius = 90;
  start = -60; 
  }

function draw() {
  if (start < width+radius) {
  var p = start + radius*cos(winkel+random(0.157));
  var q = height/2 - radius*sin(winkel+random(0.157)); 
  push();
  laenge = random(90);
  stroke(0, 85, 100, 120);
  strokeWeight(0.5);
  translate(p, q);
  rotate(angle);
  line(0, 0, laenge, laenge);
  pop();
  angle += angleSpeed;
  winkel -= 0.0125;
  start += 0.314;
  } 
      } 
