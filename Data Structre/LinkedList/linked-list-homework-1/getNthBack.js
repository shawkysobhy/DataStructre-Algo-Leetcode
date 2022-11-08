import { LinkedList } from "/linkedList.js";

class List extends LinkedList {
    getNthBack(p) {
        if (p < 1 || p > this.lenght) return null;
        if (!this.head) return null;
        let headCopy = this.head;
        let position = this.lenght - p;
        for (let i = 0; i < position; i++) {
            headCopy = headCopy.next;
        }
        return headCopy;
        //O(n)-time
        //O(1)-memory
    }
}
