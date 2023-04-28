/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
    let numsMap=new Map();
    for(let i=0;i<arr.length;i++){
        numsMap.set(arr[i],i)  
        }
    for(let i=0;i<arr.length;i++){
        let secNum=target-arr[i];
        let secIndex=numsMap.get(secNum);
        if(secIndex!==undefined&&secIndex!==i){
            return [i,numsMap.get(secNum)];
        }
    }
};