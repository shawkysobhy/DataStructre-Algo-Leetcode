import Stack from "./Stack.js";

const validParentheses = (s) => {
    let stack = new Stack();
    let parentheses = Array.from(s);
    for (let i = 0; i < parentheses.length; i++) {
        console.log(parentheses[i]);
        if (
            parentheses[i] === "(" ||
            parentheses[i] === "{" ||
            parentheses[i] === "["
        ) {
            stack.push(parentheses[i]);
            continue;
        }
            let popedValue = stack.pop();
            let createdParentheses = popedValue + parentheses[i];
            if (                                                                
                createdParentheses == "()" ||
                createdParentheses == "{}" ||
                createdParentheses == "[]"
            ) {
                continue;
            } else {
                return false;
            }
        
    }
    if (stack.size) {
        return false;
    } else {
        return true;
    }
};
// console.log(validParentheses("(("));
