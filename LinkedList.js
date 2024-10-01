class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // add new node at Head
  prepend(data) {
    const newNode = new Node(data); // This is how we create instance/ obj of a class
    newNode.next = this.head; // prev head is now assigned to the next of new node.
    this.head = newNode;
  }

  // add item at Tail
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    // we have to traverse here till the end or till next equals to null
    while (current.next) {
      current = current.next;
    }
    current.next = newNode; // this is how we insert new Node at the end.
  }

  size() {
    let count = 0;
    let current = this.head;
    // we have to traverse here till the end or till next equals to null
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // Insert new Item at an Index specified.
  insertAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.error("Invalid Index");
      return;
    }

    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    for (let i; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }

  // remove item from start of LinkedList
  removeAtHead() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  // remove item from end of LinkedList
  removeAtTail() {
    if (!this.head) {
      return;
    }

    let current = this.head;
    // we have to traverse here till the end or till next equals to null
    while (current.next.next) {
      //iterating till the item before the last item
      current = current.next;
    }
    current.next = null; // hence the last item will be null hence removed last item from the linkedlidt.
  }

  //remove an item from the given index.
  removeAt(index) {
    if (index < 0 || index > this.size()) {
      console.error("Invalid Index");
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    for (let i; i < index - 1; i++) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next; // removing the middle one
    }
  }

  // treverse
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const myLinkedList = new LinkedList();
myLinkedList.prepend(50);
// myLinkedList.print(); //50
myLinkedList.prepend(63);
// myLinkedList.print(); // 63 50

myLinkedList.prepend(83);
myLinkedList.append(30);
myLinkedList.print(); // 83 63 50 30
