/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
  count = init;
  
  this.increment = function() {
    return ++count;
  };
  
  this.decrement = function() {
      return --count;
  };
  
  this.reset = function() {
    count = init;
    return count;
  };
return {increment,decrement,reset}
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */