import { LinkedList } from "/linkedList.js";
 

class List extends LinkedList {
    isSame(list) {
        let myList = this.head;
        let comparedList = list.head;

        if (list.lenght !== this.lenght) {
            return false;
        }
        for (let i = 0; i < this.lenght; i++) {
            if (myList.value !== comparedList.value) {
                return false;
            }
            myList = myList.next;
            comparedList = comparedList.next;
        }

        return true;
        //-O(n)-time
        // O(1) -memory
    }
}