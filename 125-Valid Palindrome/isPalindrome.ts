//leetcode.com/problems/valid-palindrome/submissions/864443165/

 function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;
    let w1: string;
    let w2: string;
    while (right > left) {
        w1 = s[left].toLowerCase();
        w2 = s[right].toLowerCase();
        if (!/[a-zA-Z0-9]/.test(w1)) {
            left++;
        } else if (!/[a-zA-Z0-9]/.test(w2)) {
            right--;
        } else {
            if (w1 !== w2) return false;
            left++;
            right--;
        }
    }
    return true;
}
