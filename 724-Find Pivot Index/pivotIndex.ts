function pivotIndex(nums: number[]): number {
 let left:number=0;
 let right:number=0;
 let total:number=nums.reduce((p,c)=>p+c,0);
 for(let i=0;i<nums.length;i++){
    right=total-nums[i]-left;
   if(left==right)return i;
   left=left+nums[i];
   console.log(left,right)
 }
 
 return -1;
};