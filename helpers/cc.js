"use strict";
/* eslint-disable */
String.prototype.sort = function () {
    return this.split("").sort().join("");
};

Array.prototype.last = function () {
    return this[this.length - 1];
};

Array.prototype.first = function () {
    return this[0];
};

function two(r, c, val = 0) {
    let res = new Array(r);
    for (let i = 0; i < r; i++) {
        res[i] = new Array(c).fill(val);
    }
    return res;
}

function arr(size, val = 0) {
    return new Array(size).fill(val);
}

Array.prototype.max = function () {
    return Math.max.apply(null, this);
};

Array.prototype.min = function () {
    return Math.min.apply(null, this);
};

let maxFunc = Math.max;

Math.max = function (...values) {
    if (arguments.length == 1)
        throw "need more than one parameter for max function";
    return maxFunc(...values);
};
/*eslint-enable */
