/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
let minHeightShelves = function(books, shelfWidth) {
    let shelfHeightSum = 0;
    let currentThicknessSum = 0;
    let currentMaxBookHeight = 0;
    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        console.log(currentThicknessSum, book[0], shelfWidth);
        if (currentThicknessSum + book[0] > shelfWidth) {
            shelfHeightSum += currentMaxBookHeight;
            currentThicknessSum = 0;
            currentMaxBookHeight = 0;
        } else {
            if (book[1] > currentMaxBookHeight) currentMaxBookHeight = book[1];
            currentThicknessSum += book[0];
        }
    }
    return shelfHeightSum;
};
minHeightShelves = function(books, shelfWidth) {

    // double books for loop
    // booksLength = books.length;
    // books = [...books, ...books];
    // while (!patternExists(currentPattern)) {
        //     for (let i = 0; i < booksLength; i++) {

    const shelfPatterns = [];

    calcMaxShelfHeight(i);
    const shelf = [];
    for (let i = 0; i < books.length; i++) {
        const [thickness, height] = books[i];

        console.log(thickness, height);

        // if book can't be placed at the current leve, go next
        if (currentThicknessSum + thickness > shelfWidth) {
            shelfHeightSum += currentMaxBookHeight;
            currentMaxBookHeight = height;
            currentThicknessSum = thickness;
        } else {
            currentThicknessSum += thickness;
            if (height > currentMaxBookHeight) currentMaxBookHeight = height;
            if (typeof books[i + 1] === "undefined") {
                shelfHeightSum += currentMaxBookHeight;
            }
        }
        console.log(shelfHeightSum);
    }

    return shelfHeightSum;

    const calcMaxShelfHeight = (start) => {
        let shelfHeightSum = 0;
        let currentThicknessSum = 0;
        let currentMaxBookHeight = 0;
        for (let i = start; i < books.length; i++) {
        const [thickness, height] = books[i];

        console.log(thickness, height);

        // if book can't be placed at the current leve, go next
        if (currentThicknessSum + thickness > shelfWidth) {
            shelfHeightSum += currentMaxBookHeight;
            currentMaxBookHeight = height;
            currentThicknessSum = thickness;
        } else {
            currentThicknessSum += thickness;
            if (height > currentMaxBookHeight) currentMaxBookHeight = height;
            if (typeof books[i + 1] === "undefined") {
                shelfHeightSum += currentMaxBookHeight;
            }
        }
            return shelfHeightSum;
    }

    const patternExists = pattern => {
        for (let i = 0; 0 < shelfPatterns.length; i++) {
            if (pattern == shelfPatterns[i]) return true;
        }
        return false;
    };
};

// console.log(
//     // should return 6
//     minHeightShelves(
//         [[1, 1], [2, 3], [2, 3], [1, 1], [1, 1], [1, 1], [1, 2]],
//         4
//     )
// );
console.log(
    // should return 6
    minHeightShelves([[1, 3], [2, 4], [3, 2]], 6)
);
