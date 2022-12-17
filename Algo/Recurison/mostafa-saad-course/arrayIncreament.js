function arrayIncreament(arr) {
    if (arr.length == 0) return values;
    let last = arr.pop();
    last = last + arr.length;
    values.push(last);
    
    return arrayIncreament(arr, values);
}
console.log(arrayIncreament([1, 8, 2, 10, 3]));
