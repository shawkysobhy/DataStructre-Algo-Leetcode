/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let chars={}
   Array.from(s).forEach(ele=>{
       if(!chars[ele]){
       chars[ele]=1;
       
       }else{
       chars[ele]+=1;
       }
    }) 
    for(let i=0;i<s.length;i++){
     let prop=s[i];
     if(chars[prop]===1){
     return i
     }
    }
    return -1;
};