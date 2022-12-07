function isPowerOfFour(n: number): boolean {
if(n==1)return true;
if(n<1)return false;
n=n/4;
return isPowerOfFour(n)
};