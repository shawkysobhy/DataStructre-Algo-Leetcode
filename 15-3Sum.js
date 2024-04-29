/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var threeSum = function(arr) {
    arr=arr.sort((a,b)=>a-b)
    let ans=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]==arr[i-1] & i>0)continue;
        let l=i+1;
        let r=arr.length-1;
        while(r>l){
            let sum=arr[l]+arr[r]+arr[i]
            if(sum==0){
              ans.push([arr[i], arr[l], arr[r]]);
               l++;
               while(arr[l]==arr[l-1])l++
            }else if(sum<0){
                l++;
            }else if(sum>0){
               r--;
            }
        }
    }
    return ans;
};