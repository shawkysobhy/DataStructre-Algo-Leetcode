function topKFrequent(nums: number[], k: number): number[] {
    let map1=new Map();
    const result=[]
    for(const ele of nums){
    if(map1.has(ele)){
        map1.set(ele,map1.get(ele)+1);
    }else{
        map1.set(ele,1)
    }
}
    
    const sortedOccurance=[...map1].sort((a,b)=>{
       return b[1]-a[1]
    })

    for(let i=0;i<k;i++){
        result.push(sortedOccurance[i][0])
    }
    
    return result;
};