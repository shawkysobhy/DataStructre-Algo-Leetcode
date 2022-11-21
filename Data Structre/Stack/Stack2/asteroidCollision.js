import Stack from "./Stack.js";

const asteroidCollisionHandler = (asteroid) => {
    let stack = new Stack();
    for (let i = 0; i < asteroid.length; i++) {
        let pushAsteroid = true;
        if (ele > 0) {
            stack.push(ele);
            continue;
        }
        if (!stack.isEmpty() && ele < 0) {
            while (!stack.isEmpty() && stack.seek() > 0) {
                if (-1 * ele === stack.seek()) {
                    pushAsteroid = false;
                    stack.pop();
                    break;
                } else if (-1 * ele > stack.seek()) {
                    stack.pop();
                } else if (ele < stack.seek()) {
                    pushAsteroid = false;
                    break;
                }
            }
        }
    }
    console.log(stack.getValues());
};


const asteroidCollisionHandler2 = (asteroid) => {
    let stack = new Stack();
    for (let i = 0; i < asteroid.length; i++) {
        let ele = asteroid[i];
        if (ele > 0) {
            stack.push(ele);
            continue;
        }
        while (stack.seek() > 0 && Math.abs(ele) > stack.seek()) {
            stack.pop();
        }
        if (Math.abs(ele) === stack.seek()) {
            stack.pop();
            continue;
        }
        if (stack.isEmpty() || stack.seek() < 0) {
            console.log("object");
            stack.push(ele);
        }
    }
    console.log(stack.getValues());
    return stack.stack;
};

const test2=()=>{
    //test asteroidCollisionHandler2
    asteroidCollisionHandler2([5, 10, -5]);
}
const test1=()=>{
    // testasteroidCollisionHandler
    asteroidCollisionHandler([8, -8]);
    asteroidCollisionHandler([10, 2, -5]);
    asteroidCollisionHandler([-2, -1, 1, 2]);
    asteroidCollisionHandler([5, 10, -5]);
}