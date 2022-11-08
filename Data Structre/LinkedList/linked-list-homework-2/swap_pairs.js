import { LinkedList } from "/linkedList.js";

class List extends LinkedList {
    swapValueNodes(p, c) {
        let temp = p.value;
        p.value = c.value;
        c.value = temp;
    }
    swap_Parirs() {
        if (!this.head) return null;
        if (this.length === 1) return;
        let tempHead = this.head;
        let current;
        let previous;
        while (tempHead.next) {
            previous = tempHead;
            current = tempHead.next;
            this.swapValueNodes(previous, current);
            if (!tempHead.next.next) return;
            tempHead = tempHead.next.next;
        }
    }
    /**
     * define temp head
     * temp head is assinged to previous pointer
     * temp head.next assinged to current pointer
     * make swap between them
     * then
     * if there no two nodes terminte function
     * if there move temp head two node
     *
     * if (!tempHead.next.next) return;
     *  in case linked have even number of nodes 
     */
}

const list1 = new List();
list1.push(1);
list1.push(2);
list1.push(3);
list1.push(4);
list1.push(5);
list1.push(6);
list1.push(7);
list1.push(8);
list1.swap_Parirs();
