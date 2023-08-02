function smallerNumbersThanCurrent(nums: number[]): number[] {
  let map1=new Map();
  let res=[]
  let originalNums=[...nums];
  nums.sort((a,b)=>a-b);
  for(let i=0;i<nums.length;i++){
      let ele=nums[i]
      if(!map1.has(ele)){
          map1.set(ele,i)
      }
  }
  for(const ele of originalNums){
      res.push(map1.get(ele))
  }
    return res;
    
};