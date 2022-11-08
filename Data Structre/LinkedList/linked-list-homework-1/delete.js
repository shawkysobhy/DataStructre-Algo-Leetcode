import { LinkedList } from "/linkedList.js";

class List extends LinkedList {
    deleteBack() {
        if (!this.head) return null;
        let deletedNode = this.tail;
        if (this.lenght === 1) {
            //contain one node
            this.head = null;
            this.tail = null;
            --this.lenght;
            return deletedNode;
        }
        let newLastNode = this.head;
        while (newLastNode.next.next !== null) {
            newLastNode = newLastNode.next;
        }
        --this.lenght;
        newLastNode.next = null;
        this.tail = newLastNode;
        return deletedNode;

        //O(n)-time
        //o(1)-memory
    }

    deleteFront() {
        if (!this.head) return null;
        let deletedNode = this.head;
        this.head = deletedNode.next;
        deletedNode.next = null;
        --this.lenght;
        return deletedNode;

        //O(1)-time
        //O(1)-memory
    }
}
