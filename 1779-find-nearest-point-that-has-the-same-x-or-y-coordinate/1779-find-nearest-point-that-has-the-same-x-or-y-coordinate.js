/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let validPoints=[];
    for(let i=0;i<points.length;i++){
        if(points[i][0]==x||points[i][1]==y){  
         let distance=Math.abs(x-points[i][0]+y-points[i][1]);
        validPoints.push([distance,i])
        }
    }
    if(validPoints.length==0)return -1;
    let smallest=validPoints[0];
    validPoints.forEach(ele=>{
        if(ele[0]<smallest[0]){
            smallest=ele;
        }
    })
return smallest[1]
   

};