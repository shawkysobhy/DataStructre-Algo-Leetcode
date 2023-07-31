function longestConsecutive(nums: number[]): number {
let numsSet=new Set<number>(nums);
    let maxConsecutive=0;
    for(const ele of nums){
        let length=1;
        if(!numsSet.has(ele+1)){
           while(numsSet.has(ele-length))length++;
            
           }
       maxConsecutive=Math.max(maxConsecutive,length)   

}
    
    return maxConsecutive;
};