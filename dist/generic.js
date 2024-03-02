"use strict";
const firstEl = (arr) => {
    return arr[0];
};
console.log(firstEl(["Amit", "Dutta"]));
// with generic
const firstEl2 = (arr) => {
    return arr[0];
};
console.log(firstEl2(["Amit", "Dutta"]));
console.log(firstEl2([1, 2]));
