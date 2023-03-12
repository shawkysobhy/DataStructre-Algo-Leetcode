function majorityElement(nums: number[]): number {
 let numMap={};
 for(let i=0;i<nums.length;i++){
     if(!numMap[nums[i]]){
         numMap[nums[i]]=1;
     }else{
         numMap[nums[i]]+=1;
     }
 }
 let result=Object.keys(numMap).reduce((a,b)=>numMap[a]>numMap[b]?a:b) ;
    return +result;
};