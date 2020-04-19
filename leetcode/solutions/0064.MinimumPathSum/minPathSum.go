package solution

func minPathSum(grid [][]int) int {
	numRow := len(grid)
	numCol := len(grid[0])

	for i := 1; i < numCol; i++ {
		grid[0][i] += grid[0][i-1]
	}

	for i := 1; i < numRow; i++ {
		grid[i][0] += grid[i-1][0]

		for j := 1; j < numCol; j++ {
			grid[i][j] += min(grid[i][j-1], grid[i-1][j])
		}
	}

	return grid[numRow-1][numCol-1]
}

func min(num1, num2 int) int {
	if num1 > num2 {
		return num2
	}

	return num1
}
