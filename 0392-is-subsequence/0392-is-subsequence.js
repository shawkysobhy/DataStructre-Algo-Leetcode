/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sPointer=0;
    let tPointer=0;
    
while(sPointer<s.length&&tPointer<t.length){
    if(s[sPointer]===t[tPointer]){
        sPointer++;
        tPointer++;
    }else{
        tPointer++;
    }
}
    // console.log(sPointer)
    if(sPointer!==s.length)return false;
    return true;

};