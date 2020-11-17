var winkel = 0;
var radius = 60;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // createCanvas(600, 600);
  // saveFrames('bild-', 'png', 4, 25);
}

function draw() {
  background(250);
  stroke(51);
  strokeWeight(1.2);
  var hoehe = radius * sin(PI / 3);
  var d = radius + radius * sin(PI / 6);
  var l = width / radius;

  for (var q = 0; q < l; q++) {
    for (var p = 0; p < l; p++) {
      push();
      translate(2 * radius * p, 4 * hoehe * q);
      rotate(-winkel);
      speichen(0, 0);
      pop();
    }
  }

  for (var q = 0; q < l; q++) {
    for (var p = 0; p < l; p++) {
      push();
      translate(radius, 2* hoehe);
      translate(2 * radius * p, 4 * hoehe * q);
      rotate(-winkel);
      speichen(0, 0);
      pop();
    }
  }


  if (winkel < PI / 6) {
    var easing = 0.05;
    var diffX = PI / 6 - winkel;
    winkel += diffX * easing;
    winkel = winkel + 0.00005;
  } else if (winkel > PI / 6 && winkel < PI / 3) {
    easing = 0.05;
    diffX = PI / 3 - winkel;
    winkel += diffX * easing;
    winkel = winkel + 0.00005;

  } else winkel = 0;
}

function speichen(x, y) {
  var r = radius*1.15;
  line(x - r, y, x + r, y);
  var x1 = x - r * cos(PI / 3);
  var y1 = y + r * sin(PI / 3);
  var x2 = x + r * cos(PI / 3);
  var y2 = y - r * sin(PI / 3);
  line(x1, y1, x2, y2);
  line(x1, y2, x2, y1);
}
