/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function(fn) {
  return function curried(...args1){
      if(args1.length>=fn.length)return fn(...args1);
        return (...args2)=>curried(...args1,...args2);

  }
};
 
/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
