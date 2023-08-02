function lengthOfLongestSubstring(s: string): number {
  let y=0;
  let charSet=new Set();
  let length=0;
    for(let i=0;i<s.length;i++){
        while(charSet.has(s[i])){
          charSet.delete(s[y]);
          y++;
       }
       charSet.add(s[i]);
      length=Math.max(length,charSet.size)
}
    return length;
};