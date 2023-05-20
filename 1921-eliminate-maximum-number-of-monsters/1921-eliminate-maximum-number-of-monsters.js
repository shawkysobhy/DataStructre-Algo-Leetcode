/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
 let killed=1;
 let arrived=dist.map((monsterDist,i)=>monsterDist/speed[i]).sort((a,b)=>a-b);
 for(let i=1;i<arrived.length;i++){
     if(arrived[i]>i){
         ++killed;
     }else{
         return killed;
     }
 }
    return killed;
};