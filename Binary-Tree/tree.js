
function Tree(){
  this.root = null;
}

Tree.prototype.push = function(value) {
  if(this.root == null){
    this.root = new Node(value);
  }
  else{
    this.root.addNode(value);
  }
};

Tree.prototype.traverse = function() {
  if(this.root != null){
    this.root.visit();
  }
  else{
    console.log("EMPTY TREE!");
  }
};

Tree.prototype.search = function(key){
    if(this.root != null){
      this.root.search(key);
    }
};
