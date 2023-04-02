function isAnagram(s: string, t: string): boolean {
  let sMap={};
  for(let i=0;i<s.length;i++){
      if(sMap[s[i]]){
          sMap[s[i]]++;
      }else{
          sMap[s[i]]=1;
      }
  }
    for(let i=0;i<t.length;i++){
        if(sMap[t[i]]){
            sMap[t[i]]--;
        }else{
            return false;
        }
    }
    for(let x in sMap){
        if(sMap[x]>0){
            return false;
        }
    }
    return true;
};