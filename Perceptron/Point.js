function Point(x, y) {
  this.x = x;
  this.y = y;
  if (x > y) {
    this.label = 1;
  } else {
    this.label = -1;
  }
}

Point.prototype.render = function() {
  if (this.label == -1) {
    fill(0); //fill black
  } else {
    fill(255); //fill white
  }
  stroke(0);
  ellipse(this.x, this.y, 15, 15);
};