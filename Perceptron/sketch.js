let Points = [];

function preload() {
  for (let i = 0; i < 30; i++) {
    Points.push(new Point(random(600), random(600)));
  }
}


function setup() {
  // put setup code here
  var perceptron = new Perceptron(2, 1);
  perceptron.initializeRandomWeights(-1, 1, perceptron.inputweights);
  //create Canvas
  var canvas = createCanvas(600, 600);
  background(color(236, 240, 241));
  stroke(0);
  line(0, 0, 600, 600);
}

function draw() {
  // put drawing code here
  // console.log(Points);
  for (let i = 0; i < Points.length; i++) {
    Points[i].render();
  }
  noLoop();

}