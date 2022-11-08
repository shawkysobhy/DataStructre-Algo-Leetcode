/**
 * basic Double linked list with insert_end function
 *
 */

export class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

export class DlinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);
        ++this.length;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = null;
            newNode.previous = null;
            return this;
        }
        if (this.head) {
            newNode.previous = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    print() {
        let tempHead = this.head;
        let arr = [];
        while (tempHead) {
            arr.push(tempHead.value);
            tempHead = tempHead.next;
        }
        console.log(arr);
    }
}

// let list = new DlinkedList();
// list.push(1);
// list.push(2);
// list.push(3);
// list.print();
