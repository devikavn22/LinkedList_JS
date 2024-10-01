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

  // Function to append new node at the end
  append(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Function to sort the linked list of 0s, 1s, and 2s
  sortList() {
    let count = [0, 0, 0]; // Count of 0s, 1s, and 2s

    // Traverse the list and count occurrences
    let current = this.head;
    while (current !== null) {
      count[current.data]++;
      current = current.next;
    }

    // Update the list based on the count
    current = this.head;
    let index = 0;
    while (current !== null) {
      if (count[index] === 0) {
        index++;
      } else {
        current.data = index;
        count[index]--;
        current = current.next;
      }
    }
  }

  // Function to print the linked list
  printList() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.data + " -> ";
      current = current.next;
    }
    result += "NULL";
    console.log(result);
  }
}

// Example usage:
const list = new LinkedList();
list.append(1);
list.append(1);
list.append(2);
list.append(0);
list.append(2);
list.append(0);
list.append(1);

console.log("Original List:");
list.printList();

list.sortList();

console.log("Sorted List:");
list.printList();
