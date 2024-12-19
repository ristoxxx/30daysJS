/**
 * @param {number} n
 * @return {Function} counter
 */
var x = 0;
var createCounter = function(n) {
    x=n;
    return function(...args) {
        return x++;
    };
        
    
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */