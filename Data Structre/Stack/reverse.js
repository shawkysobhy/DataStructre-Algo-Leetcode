const reverse =  (num)=> {
    let stack = [];
    let value = [];
    Array.from(String(Math.abs(num))).forEach((ele) => {
        stack.push(ele);
    });
    while (stack.length) {
        value.push(stack.pop());
    }
    if (num > 2 ** 32) return num < 0 ? -value.join("") : +value.join("");
};
