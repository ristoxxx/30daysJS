/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const result = [];
    const array = arr;
    let i = 0;
    for (let item of array) {
        result[i] = fn(item, i) || 0;
        i++;
    }
    return result;
};