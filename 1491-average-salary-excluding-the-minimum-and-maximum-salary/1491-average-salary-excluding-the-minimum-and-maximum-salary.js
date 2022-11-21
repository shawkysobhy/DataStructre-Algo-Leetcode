/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let min=salary[0];
    let max=salary[0];
    let sumof=0;
    for(let i=0;i<salary.length;i++){
        sumof=sumof+salary[i];
        if(salary[i]>max){
            max=salary[i]
        }
         if(salary[i]<min){
            min=salary[i]
        }
    }
    console.log(max,min)
    return (sumof-max-min)/(salary.length-2);
};