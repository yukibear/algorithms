/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (data) {
    if (!data.left) {

    }
    if (!data.right) {

    }
}

var minDepth2 = function (data) {

    //leaveCandidate*2の回数回す
    //nullじゃなければ次のCandidateを+1する
    //次のCandidateが > 0 ならLevelを下げて次に行く

    //1つのループでいける？
    let i = 1;
    let max = 0;
    let nextCandidate = 2;
    let level = 2;
    while (typeof data[i] !== 'undefined') {
        max = nextCandidate * 2;
        nextCandidate = 0;
        // 同じLevel内で回す(leaf候補 * 2)
        for (let j = 0; j < max; j++) {
            // 同じLevelのj番目
            let current = data[i + j];
            if (current !== null) nextCandidate++;
        }

        if (nextCandidate > 0) level++;
        // i を進める。Candidate*2分。
        i += max;
    }
    // [3, 9, 20, 1, null, 15, 7, null, null, null, null, null, 2]
    return level;
};

//DFSが早い（ソート？）
//BFS



// console.log(minDepth([3, 9, 20, null, null, 15, 7]));
console.log(minDepth([3,9,20,1,null,15,7,null,null,null,null,null,2]));
