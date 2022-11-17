class DoubleEndedQueue {
    constructor(size) {
        this.size = size;
        this.length = 0;
        this.front = 0;
        this.rear = -1;
        this.elements = new Array(size);
    }
    isFull() {
        return this.size === this.length;
    }
    isEmpty() {
        return this.length === 0;
    }

    enqueue_rear(value) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.size;
            this.elements[this.rear] = value;
            ++this.length;
        } else {
            throw new Error("Queue is full");
        }
    }
    dequeue_front() {
        if (!this.isEmpty()) {
            --this.length;
            let curr = this.elements[this.front];
            this.elements[this.front] = null;
            this.front = (this.front + 1) % this.size;
            if (this.isEmpty()) {
                this.front = 0;
                this.rear = -1;
            }
            return curr;
        } else {
            throw new Error("Queue is empty");
        }
    }
    enqueue_front(value) {
        if (this.isFull()) throw new Error("Queue is full");
        if (this.isEmpty()) {
            this.enqueue_rear(value);
        } else {
            if (this.front === 0) {
                this.front = this.size - 1;
            } else {
                this.front = this.front - 1;
            }
            this.elements[this.front] = value;
            ++this.length;
        }
    }
    dequeue_rear() {
        if (!this.isEmpty()) {
            let curr = this.elements[this.rear];
            this.elements[this.rear] = null;
            this.rear = (this.rear - 1) % this.size;
            --this.length;
            return curr;
        }
    }

    print() {
        console.log(this.elements);
        console.log("first", this.elements[this.front]);
    }
}

const test = () => {
    let queue = new DoubleEndedQueue(4);
    queue.enqueue_front(1);
    queue.enqueue_rear(4);
    queue.enqueue_front(9);
    queue.enqueue_rear(3);
    queue.dequeue_front();
    queue.dequeue_front();
    queue.dequeue_rear();
    queue.print();
};
