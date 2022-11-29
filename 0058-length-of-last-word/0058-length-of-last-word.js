/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let words=s.split(" ");
    let expected=words[words.length-1]
    for(let i=words.length-1;i>=0;i--){
        if(words[i]!==''){
            console.log(words[i])
            expected=words[i];
            break;
        }
    }
    return expected.length;
};