/**
 * @param {Function} fn
 */
function memoize(fn) {
    let allArgs={};
    return function(...args) {
        const key=args.toString();
      if(allArgs[key]!==undefined){   
          return allArgs[key];
      }else{
          let output=fn(...args);
          allArgs[key]=output;
          return output;
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