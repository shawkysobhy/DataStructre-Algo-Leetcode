/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        if(!map.has(nums[i])){
            map.set(nums[i],i)
        }else{
           let ptr1=map.get(nums[i]) ;
           let ptr2=i;
           if(ptr2-ptr1<=k){
            return true
           }else{
            map.set(nums[i],i)
           };
        }
        
    }
    return false;
};