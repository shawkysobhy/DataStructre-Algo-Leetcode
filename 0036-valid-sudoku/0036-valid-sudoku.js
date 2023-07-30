/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
for(let i=0;i<9;i++){
    let row=new Set();
    let col=new Set();
    let boxSet=new Set();
    for(let j=0;j<9;j++){
        let box=board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)];

        let rowEle=board[i][j];
        let colEle=board[j][i];
        if(rowEle!=='.'){
          if(row.has(rowEle)){
              return false;
          }else if(rowEle> 0  && rowEle<=9){
              row.add(rowEle);
          }
      }   
    if(colEle!=='.'){
          if(col.has(colEle)){
              return false
          }else if(0<colEle && colEle<=9){    
            col.add(colEle);
        } 
      }
     if(box!=="."){
         if(boxSet.has(box))return false;
         boxSet.add(box);
     }
    }
}
   
return true;

};