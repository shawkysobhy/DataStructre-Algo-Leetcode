import { DlinkedList } from "./dlinkedList.js";

class List extends DlinkedList {
    delete_all_with_key(key) {
        if (!this.head) return null;
        let tempHead = this.head;
        while (tempHead) {
            let nextPtr = tempHead.next;
            if (tempHead.value == key && tempHead.previous == null) {
                tempHead = nextPtr;
                this.head = tempHead;
                --this.length;
                continue;
            }
            if (tempHead.value == key && tempHead.previous !== null) {
                tempHead.previous = nextPtr;
                nextPtr.previous = tempHead.previous;
                --this.length;
            }
            tempHead = tempHead.next;
        }
    }
}

let list = new List();
list.push(1);
list.push(1);
list.push(2);
list.push(3);

list.delete_all_with_key(1);
console.log(list.print());
