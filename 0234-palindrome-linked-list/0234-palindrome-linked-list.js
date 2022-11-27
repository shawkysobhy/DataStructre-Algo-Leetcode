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
  // let original='';
  // let palindrome='';  
    let arr=[]
  let tempHead=head;
    while(tempHead){
        // original=original+tempHead.val
        // palindrome=tempHead.val+palindrome;
        arr.push(tempHead.val)
        tempHead=tempHead.next;
    }
    let left=0;
    let right=arr.length-1;
    while(left<right){
        if(arr[left]!==arr[right]){
            return false;
        }
        right--;
        left++;
    }
    return true;
};