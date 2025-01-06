/*
 * File: isObjectEmpty.js
 * Created Date: Monday January 6th 2025 11:19:33
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Monday January 6th 2025 11:19:39
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2025 ristoxxx@github.com
 */

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = (obj)  => {
    return JSON.stringify(obj) === "{}" || JSON.stringify(obj) === "[]" ;
  };