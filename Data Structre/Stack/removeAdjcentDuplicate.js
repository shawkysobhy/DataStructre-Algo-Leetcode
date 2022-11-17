import Stack from "./Stack.js";

const removeAdjcentDuplicateHandler2 = (s) => {
    let stack1 = new Stack();
    let stack2 = new Stack();
    let value = "";
    Array.from(s).forEach((ele) => {
        stack1.push(ele);
    });
    while (stack1.size) {
        if (stack2.seek() === stack1.seek()) {
            stack2.pop();
            stack1.pop();
        } else {
            stack2.push(stack1.pop());
        }
    }
    console.log(stack2);
    while (stack2.size) {
        value = value + stack2.pop();
    }
    return value;
};

const removeAdjcentDuplicateHandler = (s) => {
    let stack = new Stack();
    Array.from(s).forEach((ele) => {
        if (ele === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(ele);
        }
    });
    return stack.getValues().join("");
};
// let result = removeAdjcentDuplicateHandler("abbc");
// console.log("=", result);

