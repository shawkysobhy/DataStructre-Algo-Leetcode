/**
 * delete from end
 */
import { DlinkedList } from "./dlinkedList.js";
class List extends DlinkedList {
    deleteEnd() {
        let tempTail = this.tail;
        if (!tempTail) {
            return null;
        }
        if (this.head === this.tail) {
            this.head = null;
        }
        --this.length;
        // if (this.tail == this.head) {
        //     this.head = this.tail = null;
        //     return null;
        // }

        // this.tail = this.tail.previous;
        // this.tail.next = null;

        tempTail = tempTail.previous;
        tempTail.next = null;
        this.tail = tempTail;
        console.log(tempTail.next);
    }
}

// let list = new List();
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// list.push(5);
// list.deleteEnd();
// list.deleteEnd();
// list.deleteEnd();
// list.deleteEnd();
// list.deleteEnd();


// console.log(list.print());
