function checkValid(matrix: number[][]): boolean {
 const n=matrix.length;   
 
 for(let i=0;i<n;i++){
let row=new Set<number>();
 let cols=new Set<number>();
     for(let j=0;j<n;j++){
         row.add(matrix[i][j]);
         cols.add(matrix[j][i])
     }
     console.log(row,"row");
     console.log(cols,'col')
     if(row.size!==n||cols.size!==n){
         return false;
     }
 }   
return true;
};