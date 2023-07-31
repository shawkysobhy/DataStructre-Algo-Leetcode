
function isPalindrome(s: string): boolean {
 let processedS=s.toLowerCase().replace(/[^a-z0-9]/gi,'');
    console.log(processedS)
    let pt1=0;
    let pt2=processedS.length-1;
    while(pt2>pt1){
        if(processedS[pt1]!==processedS[pt2])return false;
        pt2--;
        pt1++;
    }
    return true;
};