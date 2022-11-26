/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let odds=0;
for(let i=0;i<nums.length;i++){
    if(nums[i]===0){
        return 0
    }
    if(nums[i]<0){
        odds++;
    }
}
    // if(product<0)return -1;
    // if(product>0)return 1;
    if(odds%2==0)return 1;
    if(odds%2!==0)return -1;
};