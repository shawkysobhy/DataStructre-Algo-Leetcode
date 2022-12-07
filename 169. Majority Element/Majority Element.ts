var majorityElement = function(nums:number[]) {
    let map={};
    for(let ele of nums){
        if(!map[ele]){
            map[ele]=1;
        }else{
            map[ele]++;
        }
    }
    let majorityNum: string = Object.keys(map).reduce((previous: string, current: string): string => map[previous] < map[current] ? current : previous);

   return majorityNum;
    
};