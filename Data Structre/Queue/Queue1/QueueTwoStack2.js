/**
 * make Queue using two stacks
 * - enqueue  of Queue  => is o(1)
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
        //o(1)
        this.stack1.push(value);
    }
    dequeue() {
        //o(n)
        while (!this.stack1.isEmpty()) {
            this.stack2.push(this.stack1.pop());
        }
        this.stack2.pop();
        while (!this.stack2.isEmpty()) {
            this.stack1.push(this.stack2.pop());
        }
    }
    peek() {
        return this.stack1.elements[0];
    }
    print() {
        console.log(this.stack1.elements);
    }
}

const test1 = () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.dequeue();
    queue.dequeue();
    queue.print();
};

