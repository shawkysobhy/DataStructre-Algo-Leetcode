/**
 * @param {Function} fn
 */
function memoize(fn) {
    let allArgs=new Map();
    return function(...args) {
      if(allArgs.has(args.toString())){   
          return allArgs.get(args.toString());
      }else{
          let output=fn(...args);
          allArgs.set(args.toString(),output);
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