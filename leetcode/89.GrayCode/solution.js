/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    const max = Math.pow(2, n);
    let result = [];
    for (var i = 0; i < max; i++) {
        result.push(toGray(i));
    }
    return result;
};

const toGray = (n) => n ^ (n >> 1);
