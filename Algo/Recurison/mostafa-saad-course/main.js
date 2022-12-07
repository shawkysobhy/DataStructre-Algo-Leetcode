Online Javascript Editor for free
Write, Edit and Run your Javascript code using JS Online Compiler
function arrayMaxi(arr){
    if(arr.length==1)return arr[0]
     let fi=arr[0];
     arr.shift()
    return Math.min(fi,arrayMaxi(arr))
}

console.log(arrayMaxi([101,1,0]))



function averageArray(arr){
    if(arr.length==1)return arr[0]/5;
    let first=arr.shift();
    return first/5+averageArray(arr)
}
console.log(averageArray([1,8,2,10,3]))


function arrayIncreament(arr){
    if(arr.length==0)return values;
    let last=arr.pop();
    last=last+arr.length;
    console.log(last)
    values.push(last)
    return lastarrayIncreament(arr,values)
}
console.log(arrayIncreament([1,8,2,10,3]))