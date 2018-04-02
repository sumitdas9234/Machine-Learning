let Points = [];
var perceptron, trainingIndex;

function preload() {
  for (let i = 0; i < 30; i++) {
    Points.push(new Point(random(600), random(600)));
  }
}


function setup() {
  // put setup code here
  perceptron = new Perceptron(2, 1);
  perceptron.initializeRandomWeights(-1, 1, perceptron.inputweights);
  //create Canvas
  var canvas = createCanvas(600, 600);
  background(color(236, 240, 241));
  stroke(0);
  line(0, 0, 600, 600);
  console.log(perceptron.inputweights);
  trainingIndex = 0;
}

function draw() {
  // put drawing code here
  // console.log(Points);
  // perceptron.train([Points[trainingIndex].x, Points[trainingIndex].y], Points[trainingIndex].label);

  for (let i = 0; i < Points.length; i++) {
    Points[i].render();
    let guess = perceptron.guess([Points[i].x, Points[i].y]);
    if (guess = Points[i].label) {
      fill(0, 255, 0); //fill green
    } else {
      fill(255, 0, 0); //fill red
    }
    noStroke();
    ellipse(Points[i].x, Points[i].y, 10, 10);
  }

  if (trainingIndex == Points.length) {
    trainingIndex = 0;
  }


  noLoop();

}