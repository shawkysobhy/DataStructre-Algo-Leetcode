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
var isPalindrome = function(head) {
  let original='';
  let palindrome='';  
  let tempHead=head;
    while(tempHead){
        original=original+tempHead.val
        palindrome=tempHead.val+palindrome;
        tempHead=tempHead.next;
    }
    if(palindrome===original){
        return true;
    }else{
        return false;
    }
};