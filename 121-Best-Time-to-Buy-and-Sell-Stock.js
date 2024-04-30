/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyIndex=0;
    let max=0;
    for(let i=1;i<prices.length;i++){
        let profit=prices[i]-prices[buyIndex];
        if(profit>max)max=profit
        if(prices[i]<prices[buyIndex])buyIndex=i
    }
    return  max
};