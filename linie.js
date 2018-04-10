class Linie {

  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
  }

  move() {
    this.x1 = width / 5;
    this.x2 = 3 * width / 4;

    this.y1 += 0.25;
    this.y2 += 0.25;

    if (this.y1 > height * 0.848 && this.y2 > height * 0.848) {
      this.y1 = height * 0.848 - this.y1;
      this.y2 = height * 0.848 - this.y2;
    }
  }

  show() {
    stroke(0, 115, 75);
    strokeWeight(5);

    push();
    rotate(-0.052);
    strokeCap(SQUARE);
    line(this.x1, this.y1, this.x2, this.y2);
    pop();
  }


}
