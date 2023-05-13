/**
 * @param {Function} fn
 */
function memoize(fn) {
    let allArgs=new Map();
    return function(...args) {
      let isInputOld=allArgs.get(args.toString());
      if(typeof isInputOld!=="undefined"){   
          return isInputOld;
      }else{
          let out=fn(...args);
          allArgs.set(args.toString(),out);
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