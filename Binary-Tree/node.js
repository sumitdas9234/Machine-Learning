function Node(label) {
  this.label = label;
  this.left = null;
  this.right = null;
}

Node.prototype.addNode = function(newNode) {
  if (int(this.label) > int(newNode)) {
    //move left
    if (this.left == null) {
      this.left = new Node(newNode);
      // console.log(tree);
    } else {
      //recursively move to the next node untill
      //you encounter a null
      this.left.addNode(newNode);
    }
  } else {
    //move right
    if (this.right == null) {
      this.right = new Node(newNode);
      // console.log(tree);
    } else {
      //recursively move to the next node untill
      //you encounter a null
      this.right.addNode(newNode);
    }
  }
};



Node.prototype.visit = function() {
  if (this.left != null) {
    this.left.visit();
  }

  console.log(this.label);

  if (this.right != null) {
    this.right.visit();
  }
};



Node.prototype.search = function(key) {
  if (int(this.label) == int(key)) {
    console.log("FOUND " + this.label);
    return null;
  } else {
    if (int(key) < int(this.label)) {
      if (this.left != null) {
        this.left.search(key);
      } else {
        console.log("NOT FOUND IN THE TREE!");
      }
    } else {
      if (this.right != null) {
        this.right.search(key);
      } else {
        console.log("NOT FOUND IN THE TREE!");
      }

    }
  }
};