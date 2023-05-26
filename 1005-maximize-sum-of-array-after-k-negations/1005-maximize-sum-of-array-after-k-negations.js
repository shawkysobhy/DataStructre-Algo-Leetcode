/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length;i++){
        if(k==0)break;
        if(nums[i]<=0){
            nums[i]=nums[i]*-1;
            k--;
        }  
    }
    console.log('nums after sort and make all positive',nums)
    nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length;i++){
        if(k%2==0){
            break;
        }
        nums[i]=nums[i]*-1;
        k--;
        
    }
   
    return nums.reduce((pre,curr)=>pre+curr)
}

