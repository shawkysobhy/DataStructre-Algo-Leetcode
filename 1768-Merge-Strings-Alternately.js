/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let answer="";
    let ptr1=word1.length;
    let ptr2=word2.length;
    let counter=0;
    while(counter<ptr1||counter<ptr2){
        if(counter<ptr1){
            answer=answer+word1[counter]
        }
        if(counter<ptr2){
            answer=answer+word2[counter]
        }
        counter++
    }
    return answer
};