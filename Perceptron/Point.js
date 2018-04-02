//Class Point to store a point
function Point(x, y) {
  this.x = x; //X coordinate
  this.y = y; //y coordinate

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
    fill(0); //fill black
  } else {
    fill(255); //fill white
  }
  stroke(0);
  ellipse(this.x, this.y, 15, 15); //draw the ellipse
};


//Show the Green/Red Markers after the Perceptron guesses
function putmarkers(guess, point) {
  //if the perceptron guesses correctly, display the point with a green dot
  noStroke();
  if (guess == point.label) {
    fill(0, 255, 0); //fill green
    ellipse(point.x, point.y, 10, 10); //draw a dot on the circle
  } else {
    fill(255, 0, 0); //fill red
    ellipse(point.x, point.y, 10, 10); //draw a dot on the circle
  }
}