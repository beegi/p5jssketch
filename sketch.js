let pp = 0; //passpartout
let lanz = 0; // lamellen anzahl
let lab = 0; // lamellen abstand
let linien = [];

function setup() {
  createCanvas(600, 600);

  pp = width / 5;
  lab = 10;
  lanz = round(((width - pp) / lab) * 1.06);
  for (let i = 0; i < lanz; i++) {
    linien[i] = new Linie(pp, lab * i, width - pp, lab * i); //bei 500 - 8, bei 600 -8.2
  }
 }

function draw() {
  background(250);
  for (let i = 0; i < linien.length; i++) {
    linien[i].move();
    linien[i].show();
  }

  noStroke();
  noFill();
  rect(pp, pp, width - pp, height - pp);

  for (let i = 0; i < linien.length; i++) {
    linien[i].move();
    linien[i].show();
  }

  fill(250);
  noStroke();
  rect(0, 0, width, pp);
  rect(0, width - pp, width, width);
  rect(0, pp, pp, height - 2 * pp);
  rect(width - pp, pp, pp, height - 2 * pp);
}
