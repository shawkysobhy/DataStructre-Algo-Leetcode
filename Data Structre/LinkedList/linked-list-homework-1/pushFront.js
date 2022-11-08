import { LinkedList } from "/linkedList.js";

class List extends LinkedList {
    pushFront(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = null;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        ++this.lenght;
        //O(1)-time
        //O(1)-memory
    }
}
