// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    let node = this.head;
    while(node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.getAt(0);
  }

  getLast() {
    return this.getAt(this.size() - 1)
  }

  clear() {
    return this.head = null;
  }

  removeFirst() {
    if(!this.head) return null;
    return this.head = this.head.next;
  }

  removeLast() {
    if(!this.head) return null;
    if(!this.head.next) return this.head = null;
    let previous = this.head;
    let node = this.head.next;
    while(node.next) {
      previous = node
      node = node.next;
    }
    return previous.next = null;
  }

  insertLast(data) {
    return this.insertAt(data, this.size());
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while(node) {
      if(counter === index) return node;
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if(!this.head) return;
    if(index === 0) return this.head = this.head.next;
    const previous = this.getAt(index - 1);
    if(!previous || !previous.next) return;
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if(!this.head) return this.head = new Node(data);
    if(index === 0) return this.head = new Node(data, this.head);
    const previous = this.getAt(index - 1) || this.getLast();
    if(!previous) return this.head = new Node(data);
    previous.next = new Node(data, previous.next);
  }

  forEach(cb) {
    let node = this.head;
    let counter = 0;
    while(node) {
      cb(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while(node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
