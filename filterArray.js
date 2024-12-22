/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const result = [];
    let i = 0;
    for (let item of arr) {
        if(fn(item, i))
            result.push(item);
        i++;
    }
    return result;
};