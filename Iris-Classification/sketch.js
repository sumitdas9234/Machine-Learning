var dl, format, fileName, Iris_data;
var NeuroNet;

function preload() {
  format = "csv";
  fileName = "iris_training.csv";
  dl = new DataLoader(fileName, format);
  Iris_data = dl.load();
  // console.log(Iris_data);
  Iris_data = $.csv.toArrays(Iris_data);
}

function setup() {
  canvas = createCanvas(1160, 550);
  canvas.position(100, 80);
  setTitle("Iris Classification");
  let no_of_inputs = 4,
    hidden_layers = [4, 4],
    no_of_outputs = 3;


  //define the Model
  NeuroNet = new NeuralNet(no_of_inputs, hidden_layers, no_of_outputs); //Network(4, {4, 4}, 4)
  //initialize random weights
  NeuroNet.initializeWeights();

}

function draw() {
  background(255);
  NeuroNet.render();
  noLoop();

}