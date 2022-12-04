function isIsomorphic(s: string, t: string): boolean {
    let map=new Map();
    
    for(let i=0;i<s.length;i++){

       let si=s[i] 
        if(map.has(si)&&map.get(si)!==t[i]){
            console.log('fired1')
            return false;
            
        }else if([...map.values()].includes(t[i])&&![...map.keys()].includes(si)){
            console.log(map.values())
            return false;
        }else{
            map.set(si,t[i])
        }
            
    }
    return true;
};