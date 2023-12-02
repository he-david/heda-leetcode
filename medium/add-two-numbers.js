/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const result = [];
  let remainder = 0;

  for (let i = l1.length - 1; i >= 0; i--) {
    const sum = (l1[i] + l2[l2.length - i - 1] ?? 0) + remainder;
    result.push(sum % 10);
    remainder = Math.floor(sum / 10);
  }
};
