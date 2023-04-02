/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let nnums=new Set(nums);
    console.log(nnums.size);
    return nums.length!==nnums.size;
};