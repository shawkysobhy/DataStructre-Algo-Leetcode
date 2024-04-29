/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
let l=0;
let r=0;
while(r<nums.length){
    let count=1;
    while(nums[r]==nums[r+1]){
        r++;
        count++;
    }
    for(let i=0;i<Math.min(count,2);i++){
       nums[l]=nums[r];
       ++l;

    }
    r++;
}
   return l;
};