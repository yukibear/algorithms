var flipAndInvertImage = function(A) {
    return A.map(arr => {
        return arr.reverse().map(b => {
            return b === 0 ? 1 : 0;
        });
    });
};
console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));
