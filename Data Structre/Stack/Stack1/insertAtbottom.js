import Stack from "./Stack.js";
class BottomStack extends Stack {
    insertAtbottom(value) {
        if (stack.isEmpty()) {
            stack.push(value);
        } else {
            let top = stack.pop();
            this.insertAtbottom(value);
            stack.push(top);
        }
    }
    reverse() {
        if(stack.isEmpty())
			return;
            let cur = stack.pop();
            this.reverse();
            stack.push(cur);
    }
}

let stack = new BottomStack();
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(1);
stack.reverse();
console.log(stack.getValues());
