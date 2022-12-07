// function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
//   let map={};
//   for(let i=0;i<nums2.length;i++){
//       for(let j=i+1;j<nums2.length;j++){
//           if(nums2[j]>nums2[i]){
//               console.log(nums2[j],i)
//               map[nums2[i]]=nums2[j];
//               break;
//           }
//       }
//   }
//   let result:number[]=[];
//   for(let ele of nums1){
//       let nextGreat=map[ele];
//       if(nextGreat>ele){
//           result.push(nextGreat)
//       }else{
//           result.push(-1)
//       }
//   }
    

//   return result;
// };


function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
let map={};
let result=[];
for(let i=0;i<nums1.length;i++){
    map[nums1[i]]=i;
    result.push(-1)
}
let stack=[];
for(let num2 of nums2){
    while(stack.length&&num2>stack[stack.length-1]){
        let val=stack.pop();
        result[map[val]]=num2;
    }
    stack.push(num2)
}

return result;
}