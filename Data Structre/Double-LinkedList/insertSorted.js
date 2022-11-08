/**
 * insert value and sort it 
 */
import { DlinkedList } from "./dlinkedList.js";
import { Node } from "./dlinkedList.js";

class List extends DlinkedList {
    insert_sorted(value) {
        let newNode = new Node(value);
        ++this.length;
        if (!this.head) {
            this.head = this.tail = newNode;
            return this;
        }
        if (value <= this.head.value) {
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
            return this;
        }
        if (value >= this.tail.value) {
            newNode.previous = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            return this;
        }
        let tempHead = this.head;
        while (tempHead && tempHead.next) {
            let previous = tempHead;
            let current = tempHead.next;
            if (previous.value <= value && current.value >= value) {
                previous.next = newNode;
                current.previous = newNode;
                newNode.next = current;
                newNode.previous = previous;
                return this;
            }
            tempHead = tempHead.next;
        }
    }
}

// let list = new List();

// list.insert_sorted(1);
// list.insert_sorted(2);
// list.insert_sorted(5);
// list.insert_sorted(10);
// list.insert_sorted(2);
// list.insert_sorted(4);
// list.insert_sorted(7);
// list.insert_sorted(0);
// list.insert_sorted(11);
// list.insert_sorted(9);
// console.log(list.print());
