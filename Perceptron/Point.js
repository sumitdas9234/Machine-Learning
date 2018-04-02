//Class Point to store a point
function Point(x, y) {
  this.x = x; //X coordinate
  this.y = y; //y coordinate
  this.bias = 1;
  //Function to generate the label for each point
  if (x > y) {
    this.label = 1; //below thwe line y = x
  } else {
    this.label = -1; //above the line y = x
  }
}

//Function to render/Show the points on the canvas
Point.prototype.render = function() {

  //if the label is -ve, fill the circle with black
  if (this.label == -1) {
    strokeWeight(1);
    stroke(0); //fill black
    noFill();
  } else {
    noStroke();
    fill(0); //fill white
  }
  ellipseMode(CENTER);
  ellipse(this.x, this.y, 5, 5); //draw the ellipse
};


//Show the Green/Red Markers after the Perceptron guesses
function putmarkers(guess, point) {
  //if the perceptron guesses correctly, display the point with a green dot
  noFill();
  strokeWeight(2);
  if (guess == point.label) {
    stroke(color(76, 209, 55)); //fill green
    ellipse(point.x, point.y, 15, 15); //draw a dot on the circle
  } else {
    stroke(255, 0, 0); //fill red
    ellipse(point.x, point.y, 15, 15); //draw a dot on the circle
  }
  strokeWeight(1);
}