var tree;
var values = [];

function randomize(limit, max, min) {
  for (var i = 0; i < limit; i++) {
    values.push(Math.floor(Math.random() * (max - min) + min));
  }
}


function setup() {
  canvas = createCanvas(750, 550);
  canvas.position(100, 80);
  setTitle("Binary Tree");
  tree = new Tree();
  randomize(20, -50, 50);

  for (var i = 0; i < values.length; i++) {
    tree.push(values[i]);
  }
  tree.traverse();
}

function draw() {
  background(255);

  noLoop();

}