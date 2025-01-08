/*
 * File: arrayPrototypeLast.js
 * Created Date: Wednesday January 8th 2025 11:42:13
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Wednesday January 8th 2025 11:42:30
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2025 ristoxxx@github.com
 */

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    if(this.length<=0)
        return -1;
    return this[this.length -1];

};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */