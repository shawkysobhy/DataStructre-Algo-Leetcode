
var wordPattern = function(pattern, s) {
    
s = s.split(' ');

if(s.length !== pattern.length) return false;

patternMap = new Map();
sMap = new Map();

for(let i = 0; i < pattern.length; i++) {
    sMap.set(s[i], pattern[i]);
    patternMap.set(pattern[i], s[i]);
};

for(let i=0;i<pattern.length;i++){

    if(patternMap.get(pattern[i])!==s[i]||sMap.get(s[i])!==pattern[i])return false
}
    return true;
};