/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let output=[];
    let setNum=new Set(nums);
    for(let i=1;i<=nums.length;i++){
       if(!setNum.has(i)){
           output.push(i)
       } 
    }
    return output;
};