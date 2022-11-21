class Stack {
    constructor() {
        this.stack = [];
        this.size = 0;
    }
    push(value) {
        this.stack.push(value);
        ++this.size;
        return this.stack;
    }
    pop() {
        if (this.stack.length === 0) return null;
        --this.size;
        return this.stack.pop();
    }
    seek() {
        if (this.stack.length === 0) return null;
        return this.stack[this.stack.length - 1];
    }
    size() {
        return this.stack.length;
    }
    print() {
        let value = this.stack.join("");
        return value;
    }
    max() {
        return Math.max(...this.stack);
    }

    getValues() {
        return this.stack;
    }

    isEmpty() {
        return this.size === 0 ? true : false;
    }
}

export default Stack;
