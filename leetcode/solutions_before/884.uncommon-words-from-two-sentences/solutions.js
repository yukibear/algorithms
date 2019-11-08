/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    var history = {};
    var words = A.split(' ');
    for (var i = 0; i < words.length; i++) {
        if (typeof history[words[i]] === 'undefined') {
            history[words[i]] = true;
        } else {
            history[words[i]] = false;
        }
    }
    words = B.split(' ');
    for (var i = 0; i < words.length; i++) {
        if (typeof history[words[i]] === 'undefined') {
            history[words[i]] = true;
        } else {
            history[words[i]] = false;
        }
    }
    var result = [];
    for (var key in history) {
        if (history[key] === true) result.push(key);
    }
    return result;
};
console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));
// Output: ["sweet","sour"]

console.log(uncommonFromSentences("apple apple", "banana"));
// Output: ["banana"]
