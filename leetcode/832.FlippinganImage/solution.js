var flipAndInvertImage;
flipAndInvertImage = function (A) {
    return A.map(arr => {
        return arr.reverse().map(b => {
            return b === 0 ? 1 : 0;
        });
    });
};

flipAndInvertImage = function(A) {
    return A.map(arr => {
        let revArr = new Array(arr.length); // からっぽなのですべてループで回しても正解にはなる
        for (let i = 0; i < arr.length; i++) {
            revArr[arr.length - 1 - i] = arr[i] ^ 1;
        }
        return revArr;
    });
};

flipAndInvertImage = function (A) {
    // list, object -> immutable
    // let revArr = new Array(arr.length); // arrayの作成にコストがかかるためNG
    for (let arr of A) {
        let revArr = [...arr]; // arrayをコピーしたほうが早い・・・らしい
        for (let i = 0; i < arr.length; i++) {
            revArr[arr.length - 1 - i] = arr[i] ^ 1;
        }
        arr = revArr;
    }
    return A;
};

flipAndInvertImage = function (A) {
    // list, object -> immutable
    // let revArr = new Array(arr.length); // arrayの作成にコストがかかるためNG
    for (let arr of A) {
        let revArr = [...arr]; // arrayをコピーしたほうが早い・・・らしい
        for (let i = 0; i < arr.length/2; i++) {
            let j = arr.length - 1 - i;
            A[i][j] = arr[i] ^ 1;
        }
        arr = revArr;
    }
    return A;
};

//mutable
//immutable

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));
