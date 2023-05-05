/**
 * @return {Function}
 */
var createHelloWorld = function() {
    let txt="Hello World"
    return function(...args) {
        return txt;
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */