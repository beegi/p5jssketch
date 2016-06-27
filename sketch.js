function setup() {
 createCanvas(400, 400);
   }

function draw() {
  background(251);
  stroke(51);
  strokeWeight(0.5);
  noFill();
  var r = 100;
  var d = 120;
  translate(width / 2, height / 2);
  
  beginShape();
  for (var a = 0; a < TWO_PI; a += TWO_PI/90) {
    var x = r * cos(a);
    var y = r * sin(a);
    // vertex(x, y);
   ellipse(x, y, d, d )
  }
  endShape(CLOSE);
 
}