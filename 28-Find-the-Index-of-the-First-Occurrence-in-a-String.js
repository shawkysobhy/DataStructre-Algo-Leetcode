/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let map=new Map();
    let needleLen=needle.length
    for(let i=0;i<haystack.length;i++){
        let strEnd=needleLen+i
        if(!map.has(haystack.substring(i,strEnd))){
            map.set(haystack.substring(i,strEnd),i)
        }
    }
    if(map.has(needle))return map.get(needle)
    return -1;
};