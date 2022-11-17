import Stack from "./Stack.js";
let stack = new Stack();
let value = "ahmed ali";
const SPACE = " ";

const subWordHandler=value=>{
    let reversedValue = "";
    let chars = Array.from(value);
    chars.forEach((element, index) => {
        if (element !== SPACE) stack.push(element);
        if (element === SPACE || index === chars.length - 1) {
            while (stack.size) {
                reversedValue = reversedValue + stack.pop();
            }
            reversedValue = reversedValue + SPACE;
        }
    });
    return reversedValue;
}

// console.log(reversedValue);
// function getMax(operations) {
//     let stack = new Stack();
//     let max = [];
//     operations.forEach((ele) => {
//         if (ele[0] == "1") {
//             stack.push(ele.slice(2));
//         }
//         if (ele == "2") {
//             stack.pop();
//         }
//         if (ele == "3") {
//             max.push(stack.max());
//         }
//     });
//     return max;
// }

// console.log(getMax(["1 97", "2", "1 20", "3"]));
