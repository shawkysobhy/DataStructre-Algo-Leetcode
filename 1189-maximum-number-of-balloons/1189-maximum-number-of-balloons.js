/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let occurance=0;
   let ballonMap=new Map();
    for(let i=0;i<text.length;i++){
       if(!ballonMap.has(text[i])){
            ballonMap.set(text[i],1)
       }else{
           let count=ballonMap.get(text[i])
           ++count;
           ballonMap.set(text[i],count)
       }
    }
    if(!ballonMap.get('b')||!ballonMap.get('a')||!ballonMap.get('l')||!ballonMap.get('o')||!ballonMap.get('n'))return 0;
    return Math.min(ballonMap.get('b'),ballonMap.get('a'),ballonMap.get('n'),
                   Math.floor(ballonMap.get('l')/2),Math.floor(ballonMap.get('o')/2))
};