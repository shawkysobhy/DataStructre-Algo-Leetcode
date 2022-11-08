/**
 * delete node with value 
 */
import { DlinkedList } from "./dlinkedList.js";
class List extends DlinkedList {
    delete_with_key(value) {
        let tempHead = this.head;
        if (!this.head) return null;
        if (tempHead.value === value) {
            let deletedNode = this.head;
            this.head = deletedNode.next;
            deletedNode.next = null;
            --this.length;
            return deletedNode.value;
        }
        if (this.tail.value === value) {
            --this.length;
            let deletedNode = this.tail;
            this.tail = deletedNode.previous;
            this.tail.next = null;
            return value;
        }
        while (tempHead) {
            if (tempHead.value === value) {
                let pre = tempHead.previous;
                let after = tempHead.next;
                pre.next = after;
                after.previous = pre;
                return tempHead.value;
            }
            tempHead = tempHead.next;
        }
    }

}
let list = new List();

// list.push(1);
// list.push(5);
// list.push(2);
// console.log(list.print());
