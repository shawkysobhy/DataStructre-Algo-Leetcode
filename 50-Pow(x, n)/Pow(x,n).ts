
function myPow(x: number, n: number): number {
      function helper(x:number,n:number){
          if(x===0)return 0;
          if(n===0)return 1;
          if(n%2===0){
                let val= helper(x,n/2);
                return val*val;
          }else{
                let val=helper(x,(n-1)/2);
                return x*val*val;
          }
      }
     return n>0? helper(x,n):1/helper(x,-1*n)
};