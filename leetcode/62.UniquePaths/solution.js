/**
 *  * @param {number} m
 *   * @param {number} n
 *    * @return {number}
 *     */
var uniquePaths = function(m, n) {
  let res = Array.from({ length: n+1 }, () => new Array(m+1).fill(1));
    console.log(res)
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
        res[i][j] = res[i-1][j] + res[i][j-1];
    }
  }
  return res[n-1][m-1];
};

