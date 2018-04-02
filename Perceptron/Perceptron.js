//Constructor Function for the Perceptron
function Perceptron(inputs, outputs) {
  this.inputs = inputs; //The number of input nodes
  this.outputs = outputs; //The number of output nodes
  this.inputweights = []; //weights for each input node
  this.outputweight = []; //weights for each output node
  this.LEARNING_RATE = 0.4;
}

//A function to randomly assign weights to each node in the list
Perceptron.prototype.initializeRandomWeights = function(min, max) {
  //For each node in the list, set a random value between min and max
  for (let i = 0; i < this.inputs; i++) {
    this.inputweights.push(Math.random() * (max - min) + min);
  }
};

//The default activation function for the Perceptron
Perceptron.prototype.activate = function(input) {
  if (input >= 0)
    return 1;
  else
    return -1;
};

//A function to take inputs and return the guess
Perceptron.prototype.guess = function(input) {
  let sum = 0;
  //calculate the value of (W1 * X1) + (W2 * X2) + (W3 * X3) ....  (Wn * Xn)
  for (let i = 0; i < input.length; i++) {
    sum += input[i] * this.inputweights[i];
  }
  //pass the value to Activation Function and return the output
  return (this.activate(sum));
};

//A function to train the perceptron based on labellled data
Perceptron.prototype.train = function(inputs, target) {
  let guess = this.guess(inputs);
  var error = target - guess;
  if (error) {
    for (let i = 0; i < this.inputweights.length; i++) {
      this.inputweights[i] += error * inputs[i] * this.LEARNING_RATE;
    }
  }
};