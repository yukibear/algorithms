/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid[0][0] === 1) return 0;

  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[i].length; j++) {
      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 0;
        continue;
      }
      if (i === 0 && j === 0) {
        obstacleGrid[i][j] = 1;
        continue;
      }
      let x = obstacleGrid[i-1] ? obstacleGrid[i-1][j] : 0;
      let y = obstacleGrid[i][j-1] ? obstacleGrid[i][j-1] : 0;
      obstacleGrid[i][j] = x + y;
    }
  }
  return obstacleGrid[obstacleGrid.length-1][obstacleGrid[obstacleGrid.length-1].length-1];
};

let param = [[0,0]];
console.log(uniquePathsWithObstacles(param)); // should return 1
