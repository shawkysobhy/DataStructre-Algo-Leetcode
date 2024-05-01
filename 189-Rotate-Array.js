/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const reverse=(nums,l,r)=>{
while(l<r){
    [nums[r],nums[l]]=[nums[l],nums[r]]
    l++,r--
    }
}
var rotate = function(nums, k) {
    k=k%nums.length
    let l=0,r=nums.length-1
    reverse( nums,l,r)
    l=0,r=k-1
    reverse(nums,l,r)
    l=k,r=nums.length-1
    reverse(nums,l,r)
};
