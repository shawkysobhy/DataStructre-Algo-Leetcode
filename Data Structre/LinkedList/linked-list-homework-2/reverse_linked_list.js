import { LinkedList } from "/linkedList.js";

class List extends LinkedList {
    reverseList() {
        let previous = null;
        let currnet = this.head;
        let nextP;
        while (currnet) {
            nextP = currnet.next;
            currnet.next = previous;
            previous = currnet;
            currnet = nextP;
        }
        
        this.head=previous ;
    }
}
let list = new List();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.reverseList();
console.log(list.print());
