/**
 * reverse Double linked list
 */
import { DlinkedList } from "./dlinkedList.js";
class List extends DlinkedList {
    reverse() {
        if (!this.head) {
            return null;
        }
        console.log(this.head.next);
        if (this.head.next === null) {
            return this.head;
        }
        let current = this.head;
        let temp = null;
        while (current) {
            temp = current.previous;
            current.previous = current.next;
            current.next = temp;
            current = current.previous;
        }
        this.head = temp.previous;
        return temp.previous;
    }
}

// let list = new List();
// list.push(1);
// list.push(5);
// list.push(2);
// list.reverse();
