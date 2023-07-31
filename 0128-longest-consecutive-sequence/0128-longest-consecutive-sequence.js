/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numsSet=new Set(nums);
    let maxConsecutive=0;
    for(let i=0;i<nums.length;i++){
        let length=1;
        let currentNumber=nums[i];
        if(!numsSet.has(nums[i]+1)){
           while(numsSet.has(nums[i]-length))length++;
            
           }
       maxConsecutive=Math.max(maxConsecutive,length)   

}
    
    return maxConsecutive;
};