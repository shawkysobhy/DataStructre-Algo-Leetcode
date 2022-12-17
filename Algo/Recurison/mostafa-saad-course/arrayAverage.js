function averageArray(arr) {
    if (arr.length == 1) return arr[0] / 5;
    let first = arr.shift();
    return first / 5 + averageArray(arr);
}
console.log(averageArray([1, 8, 2, 10, 3]));
