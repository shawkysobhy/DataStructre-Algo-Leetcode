function sumArray(arr) {
    if (arr.length == 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}

let arr = [5, 4, 7, 1, 9, 13, 0];
console.log(sumArray(arr));
