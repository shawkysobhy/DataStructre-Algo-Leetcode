let arr = [5, 4, 7, 1, 9, 13, 0];

function sumArray(arr) {
    if (arr.length == 0) return 0;
    return arr[arr.length - 1] + sumArray(arr.slice(0, arr.length - 1));
}

function sumArray(arr) {
    if (arr.length == 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}

function isPowerOfThree(n) {
if(n==1)return true;
if(n<1)return false;
n=n/3;
return isPowerOfThree(n)
};

console.log(isPowerOfThree(27));