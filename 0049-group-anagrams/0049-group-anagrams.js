/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const strsMap=new Map();
    strs.forEach(str=>{
        let strKey=str.split('').sort().join('');
        if(strsMap.has(strKey)){
            strsMap.set(strKey,[...strsMap.get(strKey),str])
        }else{
            strsMap.set(strKey,[str])
        }
    })
    return Array.from(strsMap.values());

};