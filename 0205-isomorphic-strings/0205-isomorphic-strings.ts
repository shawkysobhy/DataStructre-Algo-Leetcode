function isIsomorphic(s: string, t: string): boolean {
    let smap=new Map();
    let tmap=new Map();
  for(let i=0;i<s.length;i++){
     let  sString=s[i]
     let   tString=t[i]

      if(smap.has(sString )&&smap.get(sString )!==tString||tmap.has(tString )&&tmap.get(tString )!==sString){
         return false;
      }else{
        smap.set(sString,tString)
        tmap.set(tString,sString)
      }
        
    }
    return true;
     
    
//     for(let i=0;i<s.length;i++){
//         if(map.has(s[i] )&&map.get(s[i] )!==t[i]){ //check smae char map to multiple chars
//             return false;     
//         }else if([...map.values()].includes(t[i])&&![...map.keys()].includes(s[i] )){
//             //check there multiple 
//             return false;
//         }else{
//             map.set(s[i] ,t[i])
//         }
            
//     }
//     return true;
};