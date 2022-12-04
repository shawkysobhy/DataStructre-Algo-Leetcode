function isIsomorphic(s: string, t: string): boolean {
    let map=new Map();
    
    for(let i=0;i<s.length;i++){
        if(map.has(s[i] )&&map.get(s[i] )!==t[i]){ //check smae char map to multiple chars
            return false;     
        }else if([...map.values()].includes(t[i])&&![...map.keys()].includes(s[i] )){
            //check there multiple 
            return false;
        }else{
            map.set(s[i] ,t[i])
        }
            
    }
    return true;
};