class NeuralNet {
  constructor(no_of_inputs, hidden_layers, no_of_outputs) {
    this.inputs = no_of_inputs;
    this.outputs = no_of_outputs;
    this.hidden_layers = [];


    //create the perceptrons in each layer and define the number of inputs and outputs to each+
    for (let i = 0; i < hidden_layers.length; i++) {
      //temporary list to push in the empty hidden_layers list
      let layer = [];
      let inputs = 0,
        outputs = 0;
      //if its the first hidden layer
      if (i == 0) {
        if (hidden_layers.length == 1) { //if this is the last hidden layer
          inputs = no_of_inputs;
          outputs = no_of_outputs;
        } else { //if its not the last hidden layer
          inputs = no_of_inputs;
          outputs = hidden_layers[i + 1];
        }
      }
      // if its the last hidden layer
      else if (i == hidden_layers.length - 1) {
        inputs = hidden_layers[i - 1];
        outputs = no_of_outputs;
      }
      //if its any other hidden layer
      else {
        inputs = hidden_layers[i - 1];
        outputs = hidden_layers[i + 1];
      }
      //for current hidden layer
      for (let j = 0; j < hidden_layers[i]; j++) {
        //push the created perceptron
        layer.push(new Perceptron(inputs, outputs));
      }
      // push the whole list of perceptrons
      this.hidden_layers.push(layer);
    }
  }
}

NeuralNet.prototype.initializeWeights = function() {
  //for hidden_layers
  for (let i = 0; i < this.hidden_layers.length; i++) {
    for (let j = 0; j < this.hidden_layers[i].length; j++) {
      let perceptron = this.hidden_layers[i][j];
      perceptron.initializeRandomWeights(-1, 1);
    }
  }
};



//A function to display the Neural Network on canvas
NeuralNet.prototype.render = function() {
  let w = 1160;
  let h = 560;
  let cols = this.hidden_layers.length + 2;
  let sclX = w / (cols * 1.5);
  let rows, sclY;
  let radius;
  for (let i = 0, j = 0; i < cols; i++) {
    if (i == 0) { //input list
      rows = this.inputs;
      radius = 30;
      fill(color(232, 67, 147));
    } else if (i == cols - 1) {
      rows = this.outputs;
      fill(color(253, 203, 110));
      radius = 30;
    } else {
      rows = this.hidden_layers[j].length;
      fill(color(116, 185, 255));
      radius = 50;
      j++;
    }
    sclY = h / rows;
    console.log(sclY, rows);
    for (let k = 0; k < rows; k++) {
      ellipseMode(CENTER);
      noStroke();
      ellipse((sclX * i) + sclX / 2, (sclY * k) + sclY / 2, radius, radius);
    }
  }
};