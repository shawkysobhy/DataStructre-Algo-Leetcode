function arrayMaximum(arr) {
    if (arr.length == 1) return arr[0];
    let fi = arr[0];
    arr.shift();
    return Math.min(fi, arrayMaxi(arr));
}

console.log(arrayMaximum([101, 1, 0]));
