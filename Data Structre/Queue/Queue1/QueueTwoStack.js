/**
 * make Queue using two stacks
 * - dequeue of Queue is o(1)
 */
class Stack {
    constructor() {
        this.elements = [];
        this.length = 0;
    }
    push(value) {
        this.elements.push(value);
        ++this.length;
    }
    pop() {
        if (this.length === 0) throw new Error("stack is full");
        --this.length;
        return this.elements.pop();
    }
    isEmpty() {
        return this.length === 0;
    }
    print() {
        console.log(this.elements);
    }
}

class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    enqueue(value) {
        //O(n)
        while (!this.stack1.isEmpty()) {
            this.stack2.push(this.stack1.pop());
            console.log(this.stack2.elements);
        }
        this.stack1.push(value);
        while (!this.stack2.isEmpty()) {
            this.stack1.push(this.stack2.pop());
        }
    }

    dequeue() {
        //O(1)
        return this.stack1.pop();
    }

    print() {
        let orderdQueue = [];
        for (let i = this.stack1.length - 1; i >= 0; i--) {
            orderdQueue.push(this.stack1.elements[i]);
        }
        console.log(orderdQueue);
    }
    isEmpty() {
        return this.stack1.length === 0;
    }
    peek() {
        return this.stack1.elements[this.stack1.length-1];
    }
}

const test1 = () => {
    let queue = new Queue();
    queue.enqueue(4);
    queue.enqueue(2);
    queue.enqueue(3);
    console.log(queue.peek());
    queue.print();
};


