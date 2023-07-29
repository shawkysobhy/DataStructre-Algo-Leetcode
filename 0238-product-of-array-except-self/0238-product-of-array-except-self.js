function productExceptSelf(nums: number[]): number[] {
let postfix=1;
let prefix=1;
let prefixArr=[];
let postfixArr=[];
let result=[];
for(let i=0;i<nums.length;i++){
    prefixArr[i]=prefix;
    prefix=prefix*nums[i];
}
for(let i=nums.length-1;i>=0;i--){
    postfixArr[i]=postfix;
    postfix=postfix*nums[i];
}
for(let i=0;i<nums.length;i++){
    result.push(postfixArr[i]*prefixArr[i])
}
return result;
};