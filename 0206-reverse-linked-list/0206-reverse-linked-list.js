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
    let nextP;
while(currnet){
    nextP=currnet.next;
    currnet.next=previous;
    previous=currnet;
    currnet=nextP;
    
            
}
return previous
};