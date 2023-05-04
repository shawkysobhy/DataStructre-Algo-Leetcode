/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(num) {
    if(num==0)return 0;
    if(num==1)return 1;
   for(let i=0;i<num+1;i++){
       if(i*i>num)return i-1;

   }

};