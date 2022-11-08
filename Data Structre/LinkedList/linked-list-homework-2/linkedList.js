/**
 * LINKED LIST WITH BASIC FUNTION
 * PUSH();
 * PRINT();
 */
export class Node {
    constructor(vlaue) {
        this.value = vlaue;
        this.next = null;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        ++this.length;
    }
    print() {
        let arr = [];
        let tempHead = this.head;
        while (tempHead !== null) {
            arr.push(tempHead.value);
            tempHead = tempHead.next;
        }
        console.log(arr);
    }
    getLength() {
        return this.length;
    }
  
}
