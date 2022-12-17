function isPowerOfThree(n) {
    if (n == 1) return true;
    if (n < 1) return false;
    n = n / 3;
    return isPowerOfThree(n);
}

console.log(isPowerOfThree(27));
