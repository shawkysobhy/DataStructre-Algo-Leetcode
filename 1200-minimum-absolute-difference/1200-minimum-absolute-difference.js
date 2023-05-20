/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b)=>a-b);
    let min=Infinity;
    const pairs=[];
    for(let i=0;i<arr.length-1;i++){
        let difference=Math.abs((arr[i+1])-(arr[i]))
        if(difference<min)min=difference;
        
    }
     for(let i=0;i<arr.length-1;i++){
        let difference=Math.abs((arr[i+1])-(arr[i]))
        if(min==difference)pairs.push([arr[i],arr[i+1]]);
    }
  
    return pairs;
};