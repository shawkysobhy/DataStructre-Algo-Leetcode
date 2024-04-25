/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
   const prefixArr=[]
   const postfixArr=[]
   let prefix=1;
   let postfix=1;
   nums.forEach(num=>{
    prefixArr.push(prefix);
    prefix=prefix*num
   })
   for(let i=nums.length-1;i>=0;i--){
    postfixArr.unshift(postfix);
    postfix=postfix*nums[i]
   }
   
   let ans=postfixArr.map((num,i)=>num*prefixArr[i])
   return ans;
};