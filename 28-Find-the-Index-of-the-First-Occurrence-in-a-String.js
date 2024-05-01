/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function(haystack, needle) {
//     let map=new Map();
//     let needleLen=needle.length
//     for(let i=0;i<haystack.length;i++){
//         let strEnd=needleLen+i
//         if(!map.has(haystack.substring(i,strEnd))){
//             map.set(haystack.substring(i,strEnd),i)
//         }
//     }
//     if(map.has(needle))return map.get(needle)
//     return -1;
// };

//second soluation
var strStr = function(haystack, needle) {
      for(let i=0;i<haystack.length-needle.length+1;i++){
       if(haystack.substring(i,i+needle.length)==needle)return i;
      }

return -1;

};