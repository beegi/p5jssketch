var winkel = 0;
var radius = 60;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(250);
  stroke(112, 70, 140);
  strokeWeight(2);


  var h = radius * sin(PI / 3);
  var d = radius + radius * sin(PI / 6);
  var l = width / radius;
  for (var j = 0; j < l; j++) {
    for (var i = 0; i < l; i++) {
      push();
      translate(h + 4 * i * h, d * (2 * j + 1));
      rotate(winkel);
      speichen(0, 0);
      pop();
    }
  }

  for (var n = 0; n < l; n++) {
    for (var k = 1; k < l; k++) {
      push();
      translate(h + (4 * k - 2) * h, d * (2 * n + 1));
      rotate(-winkel);
      speichen(0, 0);
      pop();
    }
  }


  for (var q = 0; q < l; q++) {
    for (var p = 0; p < l; p++) {
      push();
      translate(4 * p * h, 2 * q * d);
      rotate(winkel);
      speichen(0, 0);
      pop();
    }
  }

  for (var m = 0; m < l; m++) {
    for (var o = 1; o < l; o++) {
      push();
      translate((4 * o - 2) * h, 2 * m * d);
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
  var r = radius;
  line(x - r, y, x + r, y);
  var x1 = x - r * cos(PI / 3);
  var y1 = y + r * sin(PI / 3);
  var x2 = x + r * cos(PI / 3);
  var y2 = y - r * sin(PI / 3);
  line(x1, y1, x2, y2);
  line(x1, y2, x2, y1);
}
