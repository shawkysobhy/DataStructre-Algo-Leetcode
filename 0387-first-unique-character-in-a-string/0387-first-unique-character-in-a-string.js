/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let chars={}
    for(let ele of s){
        if(!chars[ele]){
            chars[ele]=1
        }else{
            chars[ele]++;
        }      
    }
    for(let i=0;i<s.length;i++){
        if(chars[s[i]]===1){
            return i
        }
    }
    
    return -1;
};