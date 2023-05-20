/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b)=>a-b);
    const minNums=[];
    for(let i=0;i<nums.length;i+=2){
        minNums.push(Math.min(nums[i],nums[i+1]));
    }
    return minNums.reduce((acc,curr)=>curr+acc)
};