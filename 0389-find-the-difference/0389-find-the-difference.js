/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let added="";
    let map={};
    for(char of s){
        let prop=map[char]
        if(!map[char]){
            map[char]=1;
        }else{
            map[char]=map[char]+1;
        }
    }
    
    for(char of t){
        let prop=map[char];
        if(!map[char]){
            added+=char;
        }else{
            --map[char];
        }
    }
return added;
};