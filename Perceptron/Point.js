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
    fill(color(231, 76, 60)); //fill red
  } else {
    fill(color(46, 204, 113)); //fill green
  }
  noStroke();
  ellipse(this.x, this.y, 15, 15);
};