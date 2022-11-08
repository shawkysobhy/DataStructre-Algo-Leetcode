import { DlinkedList } from "./dlinkedList.js";
import { Node } from "./dlinkedList.js";
class List extends DlinkedList {
    insert_front(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
            return this;
        }
        if (this.head) {
            newNode.next = this.head;
            this.head.previous=newNode;
            this.head = newNode;
            return this;
        }
        ++this.length;
    }
}

// let list = new List();
// list.insert_front(10);
// list.insert_front(7);
// list.insert_front(3);
// list.print();
