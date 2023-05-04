/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let output=[]
    for(let i=1;i<=nums.length;i++){
        if(!nums.includes(i)){
            output.push(i)
        }
    }
    return output;
};