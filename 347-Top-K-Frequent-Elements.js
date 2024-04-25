/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const numMap=new Map();
    let ans=[]
    nums.forEach(num=>{
        if(numMap.has(num)){
           let occurance= numMap.get(num)
            numMap.set(num,++occurance);
        }else{
            numMap.set(num,1)
        }
    })
    let kArray=Array.from(numMap.entries()).sort((b, a) => a[1] - b[1])
    let i=0;
    while(i<k){
        ans.push(kArray[i][0])
        i++;
    }
    return ans;
};