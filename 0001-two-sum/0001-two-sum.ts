function twoSum(nums: number[], target: number): number[] {
    let numsMap:any=new Map();
   for(let i=0;i<nums.length;i++){
       numsMap.set(nums[i],i)
   }
   for(let i=0;i<nums.length;i++){
    let tag=target-nums[i];
    let j=numsMap.get(tag);
    if(i!==j&&numsMap.has(tag)){
        return [i,numsMap.get(tag)];
        }
    }
    return [-1,-1]
    //never returned but due typeScript
   
};