// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data, children = []) {
    this.data = data;
    this.children = children;
  }

  add(node) {
    return this.children.push(new Node(node));
  }

  remove(node) {
    const index = this.children.findIndex(el => el.data === node);
    return this.children.splice(index, 1);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(cb) {
    const arr = [this.root];
    while(arr.length) {
      const node = arr.shift();
      arr.push(...node.children);
      cb(node);
    }
  }

  traverseDF(cb) {
    const arr = [this.root];
    while(arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);
      cb(node);
    }
  }
}

module.exports = { Tree, Node };
