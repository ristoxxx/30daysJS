/*
 * File: chunkArray.js
 * Created Date: Tuesday January 7th 2025 11:38:46
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Tuesday January 7th 2025 07:38:46
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2025 ristoxxx@github.com
 */

const cars = [];
const arr = ["Saab", "Volvo", "BMW", "MG", "MB"];
arr.push("Saab");
let x = cars.length;
let y = x % 3;
let i = 0;
while(i<x)
{
    cars.push(arr.splice(0,3));
i++;
}