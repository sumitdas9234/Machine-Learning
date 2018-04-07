var A, B;

function setup() {
  canvas = createCanvas(750, 550);
  canvas.position(100, 80);
  setTitle("Linear Algebra");
  A = new Matrix(3, 2);
  B = new Matrix(3, 2);
  A.randomize(1, 10);
  B.randomize(8, 16);
  console.log(A.matrix);
  console.log(B.matrix);
  console.log(A.add(B));
  console.log(A.add(9.6));
}

function draw() {
  background(255);

  noLoop();

}