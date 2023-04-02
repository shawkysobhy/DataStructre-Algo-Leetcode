function removeElement(nums: (string|number)[], val: number): number {
   for(let i =0;i<nums.length;i++){
       if(nums[i]===val){
           nums.splice(i,1);
           i--;
       }
   }
    return nums.length;
};