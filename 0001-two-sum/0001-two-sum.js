/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(arr, target) {
    let numsMap=new Map();
 arr.forEach((num,i)=>{
      numsMap.set(num,i)
  })

 for(let i=0;i<arr.length;i++){
    let current=arr[i]
    let secNum=target-current;
    if(numsMap.has(secNum)&&numsMap.get(secNum)!==i){
        return [i,numsMap.get(secNum)];      
        }
}}