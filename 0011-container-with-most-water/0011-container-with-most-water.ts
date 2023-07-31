function maxArea(height: number[]): number {
let left=0
let right=height.length-1;
let maxContainer=0;
while(right>left){
    let sutableHeight=Math.min(height[right],height[left]);
    let width=right-left;
    let containerSpace=sutableHeight*width;
    maxContainer=Math.max(containerSpace,maxContainer);
    if(height[left]>height[right]){
        right--;
    }else if(right>left){
        left++;  
    }else{
        left++;
    }

}
 return maxContainer;
};