function canPlaceFlowers(flowerbed: number[], n: number): boolean {
 flowerbed=[0,...flowerbed,0];
 for(let i=0;i<flowerbed.length-1;i++){
     if(flowerbed[i-1]===0&&flowerbed[i]===0&&flowerbed[i+1]===0){
         flowerbed[i]=1;
         n--;
     }
 }
 if(n>0)return false;
 return true;
}