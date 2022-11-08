import { LinkedList } from "/linkedList.js";
class deletewith extends LinkedList {
    delete_with_key = (key) => {
        if (!this.head) return null;
        let current = this.head;
        let previous = null;
        while (current.value !== key) {
            //access currnet pointer to node and previoust
            if (current.next !== null) {
                previous = current;
                current = current.next;
            } else {
                return null; // execute this block when linked list end with vlaue use search
            }
        }
        --this.length;
        if (!previous) {
            //in case element is first node
            this.head = current.next;
            current.next = null;
        }
        if (previous) {
            previous.next = current.next;
            current.next = null;
        }
        return current.value;
        //O(n)-time
        //O(1)-memory
    };
}

// let list2 = new deletewith();
// list2.push(10);
// list2.push(20);
// list2.push(30);
// list2.push(40);
// list2.push(50);
// list2.push(60);
// console.log(list2.print());
// list2.delete_with_key(60);
// console.log(list2.print());
