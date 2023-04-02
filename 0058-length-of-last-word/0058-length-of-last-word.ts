function lengthOfLastWord(s: string): number {
 let numOfWord=0;
 let j=s.length-1;
    while(j>=0){
        if(s[j]==" "&&numOfWord==0){
            j--;
        }else if(s[j]!==" "){
            numOfWord++;
            j--;
        }else if(s[j]==" "&&numOfWord!==0){
            break;
        }
    }
    return numOfWord;
};