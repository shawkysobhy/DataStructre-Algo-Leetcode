/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let pt1=0;
    let pt2=numbers.length-1;
 while(pt2>pt1){
   if(numbers[pt1]+numbers[pt2]>target){
       pt2--;
   }else if(numbers[pt1]+numbers[pt2]<target){
       pt1++;
   }else if(numbers[pt1]+numbers[pt2]===target){
       return [pt1+1,pt2+1]
   }  
 }  

};