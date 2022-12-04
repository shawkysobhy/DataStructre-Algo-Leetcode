/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let added="";
    let map={};
    for(char of s){
        if(!map[char]){
            map[char]=1;
        }else{
            ++map[char];
        }
    }
    
    for(char of t){
        if(!map[char]){
            added+=char;
        }else{
            --map[char];
        }
    }
return added;
};