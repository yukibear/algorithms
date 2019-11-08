/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function (A) {
    let maxLength = 0;
    let currentLength = 0;
    let isClimbing = A[0] < A[1];
    for (let i = 1; i < A.length; i++) {
        // console.log(i, isClimbing);
        currentLength++;
        if (isClimbing) {
            if (A[i - 1] > A[i]) isClimbing = false;
        } else {
            if (A[i - 1] < A[i]) {
                if (maxLength < currentLength) {
                    maxLength = currentLength + 1;
                    currentLength = 0;
                }
                isClimbing = true;
            }
        }
        // console.log('i:', i);
        // console.log('currentLength', currentLength);
        // console.log('isClimbling', isClimbing);
    }
    if (!isClimbing && maxLength < currentLength) maxLength = currentLength + 1;
    return maxLength;
};

// iとi+1を比較するアプローチ
longestMountain = function (A) {
    let maxLength = 0;
    let currentLength = 0;
    let isClimbing = A[0] < A[1];
    let mountainExists = false;
    for (let i = 0; i < A.length; i++) {
        // console.log('##', A[i]);
        if (A[i] === A[i + 1]) {
            currentLength = 0;
            continue;
        }
        currentLength++;
        if (isClimbing) {
            if (A[i] > A[i + 1]) {
                isClimbing = false;
                mountainExists = true;
            }
        } else {
            if (A[i] < A[i + 1] || A[i + 1] == null) {
                if (maxLength < currentLength) {
                    maxLength = currentLength;
                    currentLength = 1;
                }
                isClimbing = true;
            }
        }
        // console.log('currentLength', currentLength);
        // console.log('maxLength', maxLength);
        // console.log('isClimbling', isClimbing);
    }
    if (!isClimbing && maxLength < currentLength) maxLength = currentLength + 1;
    return mountainExists ?  maxLength : 0;
};
console.log(longestMountain([2, 1, 4, 7, 3, 2, 5])); // should return 5;
console.log(longestMountain([2, 2, 2])); // should return 0
console.log(longestMountain([0,1,2,3,4,5,4,3,2,1,0])); // should return 11
console.log(longestMountain([1,1,0,0,1,0])); // should return 3
console.log(longestMountain([2,3,3,2,0,2])); // should return 0
