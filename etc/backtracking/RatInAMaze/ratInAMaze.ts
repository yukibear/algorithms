// This is a backtracking problem referring to the following URL
// https://www.geeksforgeeks.org/rat-in-a-maze-backtracking-2/
export default function ratInAMaze(maze: number[][]): number[][] {
  const result: number[][] = Array.from(
    { length: maze.length },
    () => Array.from({ length: maze[0].length }, () => 0)
  );

  function dfs(i: number, j: number) {
    if (!maze[i] || !maze[i][j] || result[i][j] === 1) {
      return false;
    }

    result[i][j] = 1;

    if (maze[i][j] === 2) {
      return true;
    }

    if (dfs(i + 1, j) || dfs(i - 1, j) || dfs(i, j + 1) || dfs(i, j - 1)) {
      return true;
    }

    result[i][j] = 0;

    return false;
  }

  dfs(0, 0);

  return result;
}
