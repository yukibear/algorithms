package solution

func maximalSquare(matrix [][]byte) int {
	if len(matrix) == 0 {
		return 0
	}

	var max int
	var dp [2][]int
	numRow, numCol := len(matrix), len(matrix[0])
	dp[0] = make([]int, numCol+1)
	dp[1] = make([]int, numCol+1)

	for i := 0; i < numRow; i++ {
		for j := 0; j < numCol; j++ {
			var checkSize int
			row := j + 1

			if dp[1][row-1] < dp[0][row-1] {
				checkSize = dp[1][row-1] + 1
			} else {
				checkSize = dp[0][row-1] + 1
			}
			size := detectSquareSize(matrix, i, j, checkSize)
			dp[1][row] = size

			if max < size {
				max = size
			}
		}
		copy(dp[0], dp[1])
	}

	return max * max
}

func detectSquareSize(matrix [][]byte, n, m, maxSize int) int {
	var i int

	for ; i < maxSize && i <= n; i++ {
		if matrix[n-i][m] == zero {
			break
		}
	}

	return i
}

const (
	zero = '0'
	one  = '1'
)
