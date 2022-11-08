import { LinkedList } from "./linkedList.js";

class List extends LinkedList {
    getDecimalValue() {
        let value = 0;
        let pow = 0;
        let stack = [];
        let tempHead = this.head;
        while (tempHead) {
            stack.push(tempHead.value);
            tempHead = tempHead.next;
        }
        while (stack.length !== 0) {
            let digit = stack.pop();
            if (digit) {
                value = value + 2 ** pow;
            }
            ++pow;
        }
        console.log(value)
    }
}
let list = new List();
list.push(1);
list.push(0);
list.push(1);
list.getDecimalValue();
