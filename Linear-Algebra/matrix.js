//A class Matrix which accepts number of rows and cols and creates a 2D array
function Matrix(rows, cols) {
  this.rows = rows;
  this.cols = cols;
  this.matrix = []; //initialize a blank array

  for (var i = 0; i < this.rows; i++) {
    //For every row insert an array into it
    this.matrix[i] = [];
    for (var j = 0; j < this.cols; j++) {
      //initialize the matrix with 0's
      this.matrix[i][j] = 0;
    }
  }
}

//A function randomize to feed in random values into the matrix
Matrix.prototype.randomize = function(min, max) {
  for (var i = 0; i < this.rows; i++) {
    for (var j = 0; j < this.cols; j++) {
      //generate the value based on the input of min and max
      let value = Math.floor(Math.random() * (max - min)) + min;
      //initialize random value;
      this.matrix[i][j] = value;
    }
  }
};

//A function multiply to scale the matrix with a value `n`
Matrix.prototype.multiply = function(n) {
  for (var i = 0; i < this.rows; i++) {
    for (var j = 0; j < this.cols; j++) {
      //multiply each value by the scale factor `n`
      this.matrix[i][j] *= n;
    }
  }
  //return the matrix
  return this.matrix;
};

/**
A function to add element wise to the other matrix
Assuming a Reasonable Person will call this function to add:
1. Either a Numeric Value, e.g 1,2,45.....45.6 ,etc
2. Or a Complete Matrix of Similar Dimension
*/

Matrix.prototype.add = function(otherMatrix) {
  //if otherMatrix is a Matrix
  if (otherMatrix instanceof Matrix) {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        //add each value by the same index of the otherMatrix
        this.matrix[i][j] += otherMatrix.matrix[i][j];
      }
    }
  } else { //Assuming it is a Numeric Value
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        //add each value by the value otherMatrix
        this.matrix[i][j] += otherMatrix;
      }
    }
  }
  //return the matrix
  return this.matrix;
};