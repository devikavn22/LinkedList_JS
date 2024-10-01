/* 

A linked list is a DS where each element (called a node) 
points to the next node in th e sequence. 

Key Components: 
1. Node : Each element in the LinkedList 
2. Value : Data stored in each Node.
3. Next : Reference to the Next Node in the Sequence,
 i.e, Inside each of the the node we have the location of the next node in our memory.

 IN a LINKEDLIST, WE CAN ONLY MOVE FROM LEFT TO RIGHT,
 WE CAN NOT MOVE IN REVERSE MANNER.
 WE CAN NOT MOVE FROM RIGHT TO LEFT.

Next of the Last Node will be NULL
and Starting of a LINKEDLIST is a HEAD Node.

Types of LinkedList :

1. Singly LinkedList : Each node points to the next node,
2. Doubly LinkedList : Each Node points to both prev and next nodes.
3. Circular Linkedalist : Last node points to the first node.

OPERATIONS:
1) INSERTION : Adding a new node.
2) DELETION : Removing an existing node.
3) TRAVERSAL : Iterating through nodes.

Advantages :
1. Dynamic Memory allocation
2. Efficient Insertion/Deletion
3. Good Cache Performance.

Disadvantages:
1. Slow Search Times.
2. More Memory Usage.

Real-World app:
1. DB query results.
2. Browser History.
3. Dynamic Memory Allocation.

*/

// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a new node at the end of the list
  append(data) {
    const newNode = new Node(data);

    // If the list is empty, set the new node as the head
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    // Else traverse the list to find the last node
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

  // Add a new node at the start of the list
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Remove a node with a specific value
  remove(data) {
    if (!this.head) return;

    // If the head node is the one to be removed
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    // If the node to remove was found, unlink it
    if (current.next) {
      current.next = current.next.next;
    }
  }

  // traverse the linked list
  traverse() {
    let current = this.head;
    let list = [];
    while (current) {
      list.push(current.data);
      current = current.next;
    }
    console.log(list.join(" -> "));
  }
}

const list = new LinkedList();

// Adding nodes at the end
list.append(10);
list.append(20);
list.append(30);

// List: 10 -> 20 -> 30
list.traverse(); // Output: 10 -> 20 -> 30

// Adding a node at the start
list.prepend(5);

// List: 5 -> 10 -> 20 -> 30
list.traverse(); // Output: 5 -> 10 -> 20 -> 30

// Removing a node
list.remove(20);

// List: 5 -> 10 -> 30
list.traverse(); // Output: 5 -> 10 -> 30
