class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class sortLinkedList {
  constructor() {
    this.head = null;
  }

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

  sortList() {
    let count = [0, 0, 0];

    let current = this.head;
    //Traverse and counting the occurances:
    while (current !== null) {
      count[current.data]++;
      current = current.next;
    }

    //Update the List based on our count array:
    current = this.head;
    let arrIndex = 0;
    while (current !== null) {
      if (count[arrIndex] === 0) {
        arrIndex++;
      } else {
        current.data = arrIndex;
        count[arrIndex]--;
        current = current.next;
      }
    }
  }

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

const list = new sortLinkedList();
list.append(1);
list.append(1);
list.append(2);
list.append(0);
list.append(2);
list.append(0);
list.append(1);

console.log("Original Linked List:");
list.printList();

list.sortList();

console.log("Sorted Linked List:");
list.printList();
