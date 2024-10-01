/* 
Given the head of a singly linked list, return true if it is a 
palindrome or false otherwise.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let s1 = "";
  let s2 = "";
  const current = head;

  while (current) {
    s1 = `${s1}+${current}`;
    s2 = `${current}+${s2}`;
    current = current.next;
  }
  return s1 === s2;
};
