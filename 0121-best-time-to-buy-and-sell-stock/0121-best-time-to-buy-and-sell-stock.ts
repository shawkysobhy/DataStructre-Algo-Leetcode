function maxProfit(prices: number[]): number {
   let b_profit=0;
   let b_bought=prices[0]
    let pt1=0;
    let pt2=1;
   while(pt2<prices.length){
       let profit=prices[pt2]-prices[pt1];  
       if(profit>b_profit){
           b_profit=profit;
       }
       if(prices[pt2]<b_bought){
           pt1=pt2;
           b_bought=prices[pt1]
       }
       pt2++;
       
   }
    return b_profit;
};