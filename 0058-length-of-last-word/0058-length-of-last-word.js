/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // let words=s.split(" ");
    // let expected=words[words.length-1]
    // for(let i=words.length-1;i>=0;i--){
    //     if(words[i]!==''){
    //         console.log(words[i])
    //         expected=words[i];
    //         break;
    //     }
    // }
    // return expected.length;
    
    
    //--------
    // let words=s.trim().split(" ");
    // return words[words.length-1].length
    //------
    let wordPointer=s.length-1;
    let wordLength=0;
    while(s[wordPointer]==" "){
        wordPointer--;
    }//ignore space in end of string
    while(wordPointer>=0&&s[wordPointer]!==" "){
        //first cond to stop loop && sec cond to stop while word end
        wordLength++;
        wordPointer--;
    }
    return wordLength;

};