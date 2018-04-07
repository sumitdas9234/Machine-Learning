var A, B;

function setup() {
  canvas = createCanvas(750, 550);
  canvas.position(100, 80);
  setTitle("Linear Algebra");
  A = new Matrix(3, 3);
  B = new Matrix(3, 3);
  A.randomize(1, 10);
  console.log(A.matrix);
  // console.log(A.multiply(2).matrix);

  var func = function(val) {
    return val * 2;
  }

  let value = A.map(func);
  console.log(value.matrix);
}

function draw() {
  background(255);

  noLoop();

}