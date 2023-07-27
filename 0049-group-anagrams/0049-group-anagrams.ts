function groupAnagrams(strs: string[]): string[][] {
    let anagramGroupArr={}
  for(let i=0;i<strs.length;i++){
      let sortWord=strs[i].split('').sort().join('');
      if(anagramGroupArr[sortWord]){
          anagramGroupArr[sortWord]=[...anagramGroupArr[sortWord],strs[i]]
      }else{
          anagramGroupArr[sortWord]=[strs[i]]
      }
  }
let result=[]
for (const [key, value] of Object.entries(anagramGroupArr)) {
  result.push(value)
}
    return result;
};