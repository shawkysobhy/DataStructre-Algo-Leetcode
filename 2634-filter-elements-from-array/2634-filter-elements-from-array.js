/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filterdArr=[]
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            filterdArr[filterdArr.length]=arr[i]
        }
    }
    return filterdArr;
};