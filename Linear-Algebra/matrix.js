//A class Matrix which accepts number of rows and cols and creates a 2D array
class Matrix {
  constructor(rows, cols) {
    this.rows = rows; //the number of rows
    this.cols = cols; //the number of cols
    this.matrix = []; //initialize a blank array
    //holds the dimension of the matrix
    this.shape = {
      rows, //#rows
      cols //#cols
    };

    for (let i = 0; i < this.rows; i++) {
      //For every row insert an array into it
      this.matrix[i] = [];
      for (let j = 0; j < this.cols; j++) {
        //initialize the matrix with 0's
        this.matrix[i][j] = 0;
      }
    }
  }


  //static method multiply
  static multiply(a, b) {
    var result;
    //check for the num of rows and cols for the matrices
    try {
      if (a.cols === b.rows) { // if #cols of first matrix == #rows of second matrix
        //Do Matrix Multiplication
        result = new Matrix(a.rows, b.cols);
        //for every element in rows of this.matrix
        for (let i = 0; i < result.rows; i++) {
          //for every element in cols of n.matrix
          for (let j = 0; j < result.cols; j++) {
            //calculate the sum
            let sum = 0;
            //for every element in the matrix
            for (let k = 0; k < a.cols; k++) {
              sum += a.matrix[i][k] * b.matrix[k][j]; //store the sum in sum
            }
            result.matrix[i][j] = sum; //save it to the resultant matrix
          }
        }

      } else throw "Incompaitable Matrix Operation"; // else throw error
    } catch (e) {
      let error = e;
      console.log(e); //display the error, if any
    } finally {
      return result; //finally return the result
    }
  }
}

//A function randomize to feed in random values into the matrix
Matrix.prototype.randomize = function(min, max) {
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      //generate the value based on the input of min and max
      let value = Math.floor(Math.random() * (max - min)) + min;
      //initialize random value;
      this.matrix[i][j] = value;
    }
  }
};

/**
A function to multiply values to the other matrix
Assuming a Reasonable Person will call this function to multiply
 a  Scalar Numeric Value, e.g 1,2,45.....45.6 ,etc
*/
Matrix.prototype.multiply = function(n) {
  try { //check for null/undefined/NaN values
    if (n == null || n == undefined || isNaN(n)) {
      throw "Cannot Read Value of Null/Undefined"; //throw error
    } else {
      //scalar Multiplication
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          //multiply each value by the scale factor `n`
          this.matrix[i][j] *= n;
        }
      }
    }
  } catch (e) {
    let error = e;
    console.log(error); //display the error, if any
  } finally {
    return this; //finally, return the matrix
  }
};

/**
A function to add element wise to the other matrix
Assuming a Reasonable Person will call this function to add:
1. Either a  Scalar Numeric Value, e.g 1,2,45.....45.6 ,etc
2. Or a Complete Matrix of Similar Dimension
*/

Matrix.prototype.add = function(n) {
  var newMatrix = new Matrix(this.rows, this.cols);
  //if n is a Matrix
  if (n instanceof Matrix) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        //add each value by the same index of the n
        newMatrix.matrix[i][j] = this.matrix[i][j] + n.matrix[i][j];
      }
    }
  } else { //Assuming it is a Numeric Value
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        //add each value by the value n
        newMatrix.matrix[i][j] = this.matrix[i][j] + n;
      }
    }
  }
  //return the matrix
  return newMatrix;
};

// A function to transpose the matrix
Matrix.prototype.transpose = function() {
  var matrix = new Matrix(this.cols, this.rows);
  //for each cols and rows
  for (let i = 0; i < matrix.rows; i++) {
    for (let j = 0; j < matrix.cols; j++) {
      //make rows the columns and vice-versa
      matrix.matrix[i][j] = this.matrix[j][i];
    }
  }
  return matrix;
};


//A function to apply a  y = func()  to all elements in the Matrix
Matrix.prototype.map = function(func) {
  //for every element in the matrix
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      // get the current Value
      let val = this.matrix[i][j];
      //evalute the value and save it back
      this.matrix[i][j] = func(val);
    }
  }
  return this;
};