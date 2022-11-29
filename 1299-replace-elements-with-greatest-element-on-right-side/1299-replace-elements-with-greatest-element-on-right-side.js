/**
 * @param {number[]} arr
 * @return {number[]}
 */

var replaceElements = function(arr) {
    // for(let i=0;i<arr.length;i++){
    //     if(i===arr.length-1){
    //         arr[i]=-1;
    //     }else{
    //         arr[i]=arr[i+1];
    //     }   
    //     for(let j=i+1;j<arr.length;j++){
    //         if(arr[j]>arr[i]){
    //             arr[i]=arr[j]
    //         }
    //     }
    // }
    
    let max=-1;
     // arr[arr.length-1]=-1;
    for(let i=arr.length-1;i>=0;i--){
        
        let newMax=Math.max(arr[i],max)
        arr[i]=max;
        max=newMax;
    }
    return arr;
};