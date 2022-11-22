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
var deleteDuplicates = function(head) {
    if(!head)return null;
    let tempHead=head;
    let nextPtr;
    while(tempHead){
        nextPtr=tempHead.next;
        while(nextPtr&&nextPtr.val===tempHead.val){
            nextPtr=nextPtr.next;
            tempHead.next=nextPtr;
        }
        tempHead=tempHead.next;
    }
    return head;
    
};