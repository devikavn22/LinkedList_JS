class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Using Two-Pointer Technique(Fast and Slow)
function middleNode(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next; // moves one step at a time.
    fast = fast.next.next; // moves two steps at a time
  }

  return slow;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;

  for (let value of arr) {
    current.next = new ListNode(value);
    current = current.next;
  }

  return dummy.next;
}

// Example 1
let head1 = createLinkedList([1, 2, 3, 4, 5]);
console.log(middleNode(head1)); // Output: [3, 4, 5]

// Example 2
let head2 = createLinkedList([1, 2, 3, 4, 5, 6]);
console.log(middleNode(head2)); // Output: [4, 5, 6]
