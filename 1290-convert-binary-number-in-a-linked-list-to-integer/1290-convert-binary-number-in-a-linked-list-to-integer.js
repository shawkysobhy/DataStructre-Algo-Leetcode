/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
        let value = 0;
        let pow = 0;
        let stack = [];
        let tempHead = head;
        while (tempHead) {
            stack.push(tempHead.val);
            tempHead = tempHead.next;
        }
        while (stack.length !== 0) {
            let digit = stack.pop();
            if (digit) {
                value = value + 2 ** pow;
            }
            ++pow;
        }
        return value;
    };