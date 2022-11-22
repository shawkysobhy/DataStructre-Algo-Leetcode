/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
let n1=1;
let numOfbits=0;
for(let i=0;i<32;i++){
    let bit=((n&n1)!==0);
    if(bit)numOfbits++;
    n1=n1<<1;
        

} 
    return  numOfbits
};