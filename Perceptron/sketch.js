let Points = []; //To keep track of the training data
var perceptron, trainingIndex; //global variable


//preload function
function preload() {
  //Create a set of 50 points for training data
  for (let i = 0; i < 50; i++) {
    Points.push(new Point(random(600), random(600)));
  }
}


function setup() {
  // put setup code here
  perceptron = new Perceptron(2, 1); //create a Perceptron
  //Initialize the random weight with a random value to start with
  perceptron.initializeRandomWeights(-1, 1, perceptron.inputweights);
  //create Canvas
  var canvas = createCanvas(600, 600);
  //add neccessary visuals
  background(color(236, 240, 241));
  stroke(0);
  //draw a line to divide the screen
  line(0, 0, 600, 600);
  //display the weights [DEBUG]
  console.log(perceptron.inputweights);
  //Initialize the training Index to 0, as we are going to train one point per mouse click for visual grepping
  trainingIndex = 0;
}

function draw() {
  // put drawing code here
  // console.log(Points);

  //show every point in the Points[] list
  for (let i = 0; i < Points.length; i++) {
    Points[i].render(); //call the render function on each point

    let guess = perceptron.guess([Points[i].x, Points[i].y]); //let the perceptron guess based on initial weights
    // console.log("Guess: " + guess + " Label: " + Points[i].label);

    //put the markers
    putmarkers(guess, Points[i])
  }
  // noLoop();
}


//On mouse Click do the following
function mousePressed() {
  //Train the perceptron on that Point
  perceptron.train([Points[trainingIndex].x, Points[trainingIndex].y], Points[trainingIndex].label);
  trainingIndex++; //increase the training Index by 1

  //display the weights and the Label. [DEBUG]
  console.log("Point: " + (trainingIndex) + " W1: " + perceptron.inputweights[0] + "W2:" + perceptron.inputweights[1]);

  //for each point in the Points[]
  for (let i = 0; i < Points.length; i++) {
    //guess on the basis of the updated weights after training
    let guess = perceptron.guess([Points[i].x, Points[i].y]);
    // console.log("Guess: " + guess + " Label: " + Points[i].label);

    //put the markers
    putmarkers(guess, Points[i])
  }

  //if trainingIndex reaches limit, reset to index 0
  if (trainingIndex == Points.length) {
    trainingIndex = 0;
  }
}