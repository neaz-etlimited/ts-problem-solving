class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  print() {
    let current = this.head;
    let values = [];
    while (current) {
      values.push(current.val);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}

let list = new SingleLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.print(); // Outputs: 10 -> 20 -> 30
console.log("Head:", list.head.val); // Outputs: Head: 10
console.log("Tail:", list.tail.val); // Outputs: Tail: 30
console.log("Length:", list.length); // Outputs: Length: 3
