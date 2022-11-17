class CircularQueue {
    constructor(size) {
        this.element = new Array(size);
        this.size = size;
        this.length = 0;
        this.front = 0;
        this.rear = -1;
    }
    isEmpty() {
        return this.length === 0;
    }
    isFull() {
        return this.length === this.size;
    }

    enqueue(element) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.size;
            this.element[this.rear] = element;
            ++this.length;
        } else {
            throw new Error("Queue is full");
        }
    }

    dequeue() {
        if (!this.isEmpty()) {
            let dequeueElement = this.element[this.front];
            this.element[this.front] = null;
            this.front = (this.front + 1) % this.size;
            this.length--;
            if (this.isEmpty()) {
                this.front = 0;
                this.rear = -1;
            }
            return dequeueElement;
        } else {
            throw new Error("Queue is empty");
        }
    }
    getFront() {
        if (this.isEmpty()) {
            return this.element[this.front];
        }
    }
    print() {
        console.log(this.element.join(" "));
    }
    clear() {
        this.element = new Array(this.size);
        this.length = 0;
        this.rear = 0;
        this.front = 0;
    }
}

const test=()=>{
    let queue = new CircularQueue(5);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.dequeue();
    queue.enqueue(6);
    queue.clear();
    queue.enqueue(1);
    queue.enqueue(1);
    queue.enqueue(1);
    queue.enqueue(1);
    queue.enqueue(4);
    queue.dequeue();
    queue.enqueue(4);
    queue.print();
}