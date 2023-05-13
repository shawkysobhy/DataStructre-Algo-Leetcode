/**
 * @param {Function} fn
 */
const compareInputs=(arg1,arg2)=>arg1.every((ele,indx)=>ele===arg2[indx]);
function memoize(fn) {
    let Args=new Map();
    return function(...args) {
      let isInputOld=Args.get(args.toString());
      if(typeof isInputOld!=="undefined"){   
          return isInputOld;
      }else{
          let out=fn(...args);
          Args.set(args.toString(),out);
          return out;
      }
    }
}



/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */