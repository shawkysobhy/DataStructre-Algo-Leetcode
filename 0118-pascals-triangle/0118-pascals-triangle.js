/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result=[[1]];
    for(let i=1;i<numRows;i++){
         let row=[];
        let rowCol=i+1;
        for(let j=0;j<rowCol;j++){
            if(j==0){
                row.push(1);
              
            }else if(j+1==rowCol){
               row.push(1)
               
           }else{
             let val=result[i-1][j-1]+result[i-1][j];
            row.push(val) 
           }
            
        }
        result.push(row)
    }
    
    return result;
};