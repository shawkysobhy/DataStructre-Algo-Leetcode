import { LinkedList } from "./linkedList.js";

class List extends LinkedList {
    delete_even_position() {
        if (!this.head) return null;
        let currnet = this.head.next;
        let previous = this.head;
        while (currnet != null) {
            --this.length;
            previous.next = currnet.next;
            if (!currnet.next) return null;
            previous = currnet;
            currnet = currnet.next;
            previous = currnet;
            currnet = currnet.next;
        }
    }
}

let list = new List();
list.push("odd");
list.push("even");
list.push("odd");
list.push("even");
list.push("odd");
list.push("even");
list.push("odd");
list.push("even");
list.delete_even_position();
// console.log(list.print());
// console.log(list.length);
