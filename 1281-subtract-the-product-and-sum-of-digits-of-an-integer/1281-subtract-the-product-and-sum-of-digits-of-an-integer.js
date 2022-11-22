/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    // let digits=[];
    let sum=0;
    let product=1;
    while(n>0){
        let digit=n%10;   
        n=Math.floor(n/10);
        sum+=digit;
        product*=digit;
        
    }
    // let sum=digits.reduce((preivous,current)=>preivous+current,0) 
    // let product=digits.reduce((preivous,current)=>preivous*current,1) 
    return product-sum;

};