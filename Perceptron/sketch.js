let Points = []; //To keep track of the training data
var perceptron, trainingIndex, canvas; //global variable
var complete = false; //the flag to stop the draw function


//preload function
function preload() {
  //Create a set of 50 points for training data
  for (let i = 0; i < 100; i++) {
    Points.push(new Point(random(-300, 300), random(-300, 300)));
  }
}


function setup() {
  // put setup code here
  perceptron = new Perceptron(3, 1); //create a Perceptron
  //Initialize the random weight with a random value to start with
  perceptron.initializeRandomWeights(-1, 1, perceptron.inputweights);
  //create Canvas
  canvas = createCanvas(600, 600);
  canvas.translate(300, 300);
  smooth();
  //display the weights [DEBUG]
  console.log(perceptron.inputweights);
  //Initialize the training Index to 0, as we are going to train one point per mouse click for visual grepping
  trainingIndex = 0;
  window.setInterval(trainPerceptron, 100);
}

function draw() {
  // put drawing code here
  // console.log(Points);
  canvas.translate(300, 300);
  background(255);
  stroke(0);
  //draw a line to divide the screen
  strokeWeight(3);
  line(-300, -300, 300, 300);
  //show every point in the Points[] list
  for (let i = 0; i < Points.length; i++) {
    Points[i].render(); //call the render function on each point

    let guess = perceptron.guess([Points[i].x, Points[i].y, Points[i].bias]); //let the perceptron guess based on initial weights
    // console.log("Guess: " + guess + " Label: " + Points[i].label);
    //put the markers
    putmarkers(guess, Points[i]);
    //update the line based on the perceptron
    strokeWeight(2);
    stroke(color(0, 151, 230));
    smooth();
    line(-300, (300 * (perceptron.inputweights[0] / perceptron.inputweights[1])), 300, -300 * (perceptron.inputweights[0] / perceptron.inputweights[1]));
  }
  if (complete) {
    console.log("TRAINING COMPLETE !");
    console.log("\nFinal Weights: " + perceptron.inputweights[0] + "\t" + perceptron.inputweights[1] + "\nBias Weight: " + perceptron.inputweights[2]);
    noLoop();
  }
  // noLoop();
}


//Tain the Perceptron
function trainPerceptron() {
  if (!complete) {
    //Train the perceptron on that Point
    perceptron.train([Points[trainingIndex].x, Points[trainingIndex].y, Points[trainingIndex].bias], Points[trainingIndex].label);
    trainingIndex++; //increase the training Index by 1

    //display the weights and the Label. [DEBUG]
    console.log("Point: " + (trainingIndex) + "\nW1: " + perceptron.inputweights[0] + "     W2:" + perceptron.inputweights[1] + "\nBias Weight: " + perceptron.inputweights[2]);

    //for each point in the Points[]
    for (let i = 0; i < Points.length; i++) {
      //guess on the basis of the updated weights after training
      let guess = perceptron.guess([Points[i].x, Points[i].y]);
      // console.log("Guess: " + guess + " Label: " + Points[i].label);

      //put the markers
      putmarkers(guess, Points[i]);
    }

    //if trainingIndex reaches limit, reset to index 0
    if (trainingIndex == Points.length) {
      trainingIndex = 0;
    }
  } else {
    return;
  }
}


//On mouse Click do the following
function mousePressed() {
  complete = true;
}