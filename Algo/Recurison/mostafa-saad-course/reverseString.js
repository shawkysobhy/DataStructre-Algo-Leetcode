function reverse(str, idx = str.length - 1) {
    if (idx < 0) return " ";
    process.stdout.write(`${str[idx]}`);
    reverse(str, idx - 1);
}

reverse;
