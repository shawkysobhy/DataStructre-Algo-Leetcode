function getConcatenation(nums: number[]): number[] {

let ans=new Array(2*nums.length);
for(let i=0;i<ans.length;i++){
    ans[i]=nums[i%nums.length];
}
return ans;

};