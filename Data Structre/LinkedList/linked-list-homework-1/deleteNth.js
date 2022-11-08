import { LinkedList } from "/linkedList.js";

class List extends LinkedList {
    deleteNth(position) {
        if (position > this.lenght || position < 1) return null;
        if (position === 1) return this.deleteFront();
        if (position === this.lenght) return this.deleteBack();
        let deletedNode;
        let previousDeleted = this.head;
        for (let i = 1; i < position - 1; i++) {
            previousDeleted = previousDeleted.next;
        }
        deletedNode = previousDeleted.next;
        previousDeleted.next = deletedNode.next;
        --this.lenght;
        return deletedNode;

        //O(n)-time
        //O(1)-memory
    }
}

let list = new List();
for (let i = 0; i < 8; i++) {
    list.push(i * 10);
}
console.log(list.print());
list.deleteNth(2);
console.log(list.print());
