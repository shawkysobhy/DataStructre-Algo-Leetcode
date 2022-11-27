/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let previous=null;
    let currnet=head;
    
while(currnet){
  let temp=currnet.next;
    currnet.next=previous;
    previous=currnet;
    currnet=temp;
    
            
}
return previous
};