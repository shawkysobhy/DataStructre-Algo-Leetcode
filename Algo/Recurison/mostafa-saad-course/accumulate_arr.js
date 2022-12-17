const accumulate_arr = (arr,len=arr.length) => {
    if(arr.length==1)return;

    accumulate_arr(arr,len=arr.length-1);
    arr[len-1]=arr[len-1]+arr[len-2]
};


accumulate_arr([1,2,3,4])