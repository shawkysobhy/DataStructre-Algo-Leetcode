function containsDuplicate(nums: number[]): boolean {
  let numsMap=new Map();
  for(let i=0;i<nums.length;i++){
      let re=numsMap.get(nums[i])
      if(!re){
          numsMap.set(nums[i],1)
      }else{
          numsMap.set(nums[i],++re)
      }
  }
for(let i=0;i<nums.length;i++){
    if(numsMap.get(nums[i])>1){
        return true;
    }
}
  return false;
};
/**
Another good solution is to sort the array
and compare between arr[i] and arr[i+1] if they the same return true
simple solution and shor
 */