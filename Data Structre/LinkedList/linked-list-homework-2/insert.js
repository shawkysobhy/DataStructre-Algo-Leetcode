import { Node } from "/linkedList.js";
import { LinkedList } from "/linkedList.js";
/**
 * insert to be sorte
 */

class List extends LinkedList {
    insertSorted(value) {
        let newNode = new Node(value);
        ++this.length;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        let tempHead = this.head;
        if (
            tempHead.value > newNode.value ||
            tempHead.value === newNode.value
        ) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        tempHead = this.head;
        while (tempHead || tempHead.next) {
            let previous = tempHead;
            let current = tempHead.next;
            if (newNode.value < current.value) {
                newNode.next = current;
                previous.next = newNode;
                return;
            }
            if (current.next == null) {
                //inca
                current.next = newNode;
                newNode.next = null;
                return;
            }
            tempHead = tempHead.next;
        }
    }
}

let list = new List();
list.insertSorted(10);
list.insertSorted(5);
list.insertSorted(2);

list.insertSorted(7);
list.insertSorted(100);

