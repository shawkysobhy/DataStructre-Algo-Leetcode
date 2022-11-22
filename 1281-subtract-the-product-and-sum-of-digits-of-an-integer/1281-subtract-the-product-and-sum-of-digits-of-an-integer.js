/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let digits=[];
    while(n>0){
        digits.push(n%10);
        n=Math.floor(n/10);
    }
    let sum=digits.reduce((preivous,current)=>preivous+current,0) 
    let product=digits.reduce((preivous,current)=>preivous*current,1) 
    return product-sum;

};