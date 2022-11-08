/**
 * delete from began
 */
import { DlinkedList } from "./dlinkedList.js";

class List extends DlinkedList {
    deleteFront() {
        if (!this.head) return null;
        --this.length;
        let deletedNode = this.head;
        this.head = deletedNode.next;
        deletedNode.next = null;
        return deletedNode.value;
    }
}

// let list = new List();
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// let list2 = new List();
// console.log(list.print());
// list.deleteFront();
// list.deleteFront();
// console.log(list.print());
