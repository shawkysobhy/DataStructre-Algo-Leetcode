import { LinkedList } from "/linkedList.js";

class List extends LinkedList {}

const mergeLists = (list1, list2) => {
    let tempHead1 = list1.head;
    let tempHead2 = list2.head;
    let helper = list1.head;
    let tail2 = list2.head;
    let tail1 = list1.head;
    while (tail2.next) {
        tail2 = tail2.next;
    }
    while (tail1.next) {
        tail1 = tail1.next;
    }
    if (tempHead2.value <= tempHead1.value) {
        tail2.next = list1.head;
        return list2;
    }
    if (tempHead2.value >= tail1.value) {
        tail1.next = list2.head;
        return list1;
    }

    while (helper && helper.next) {
        let pre = helper;
        let curr = helper.next;
        console.log(pre.value);
        console.log(curr.value);
        if (pre.value >= tempHead2.value <= curr.value) {
            pre.next = tempHead2;
            tail2.next = curr;
            return list1;
        }
        helper = helper.next;
    }
   
};

let list1 = new List();
let list2 = new List();
list1.push(1);
list1.push(2);
list1.push(3);
list2.push(3);
list2.push(4);
list1.print();
list2.print();
let x = mergeLists(list1, list2);
x.print();
