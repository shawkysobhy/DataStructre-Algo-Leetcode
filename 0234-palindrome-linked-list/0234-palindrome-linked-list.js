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
  let palindrome=[];
  let tempHead=head;
    while(tempHead){
        palindrome.push(tempHead.val);
        tempHead=tempHead.next;
    }
    let reversed=palindrome.reverse().join("");
    let original=palindrome.reverse().join("");
    console.log("rev",reversed);
    console.log("original",original)
    if(reversed===original){
        return true;
    }else{
        return false;
    }
};