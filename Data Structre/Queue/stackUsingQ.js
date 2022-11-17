class Queue {
    constructor() {
        this.elements = [];
    }
    isEmpty() {
        return this.elements.length === 0;
    }
    enqueue(value) {
        this.elements.push(value);
    }
    dequeue() {
        if (this.isEmpty()) return null;
        let curr = this.elements.shift();
        return curr;
    }
    print() {
        console.log(this.elements.join(" "));
    }
    peek() {
        return this.elements[0];
    }
}

class Stack {
    constructor() {
        this.queue = new Queue();
    }
    push(value) {
        let size = this.queue.elements.length;
        this.queue.enqueue(value);
        for (let i = 0; i < size; i++) {
            let curr = this.queue.elements[0];
            this.queue.dequeue();
            this.queue.enqueue(curr);
        }
    }
    pop() {
        if (this.queue.isEmpty()) return null;
        return this.queue.dequeue();
    }
    peek() {
        console.log(this.queue.peek());
        return this.queue.peek();
    }
    print() {
        console.log(this.queue.elements);
    }
}

const test = () => {
    let stackQ = new Stack();
    stackQ.push(1);
    stackQ.push(2);
    stackQ.push(3);
    stackQ.pop();
    stackQ.peek();
    stackQ.print();
};

