function twoSum(nums: number[], target: number): number[] {
  const myMap=new Map();
  for(let i=0;i<nums.length;i++){
      myMap.set(nums[i],target-i);
  }   
   for(let i=0;i<nums.length;i++){
       let nd2=target-nums[i];
       if(myMap.has(nd2)){
         let nd2Index=nums.indexOf(nd2);
           if(nd2Index!==i){
             return [i,nums.indexOf(nd2)]
           }
       }
   }
};