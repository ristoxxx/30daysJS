/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    fn(...args);
    let timer = setInterval(function() {
        fn(...args);
    }, t);

    let cancelFn = function() {
    clearInterval(timer);
    };
    return cancelFn;
};