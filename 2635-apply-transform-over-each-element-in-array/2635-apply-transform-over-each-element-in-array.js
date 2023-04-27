/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let mappedArr=[];
    for(let i=0;i<arr.length;i++){
        mappedArr[mappedArr.length]=fn(arr[i],i)
    }
    return mappedArr;
};