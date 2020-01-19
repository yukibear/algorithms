package solution

func generate(numRows int) [][]int {
	if numRows == 0 {
		return [][]int{}
	}
	if numRows == 1 {
		return [][]int{{1}}
	}
	if numRows == 0 {
		return [][]int{{1}, {1, 1}}
	}

	result := make([][]int, numRows-1)
	result[0] = []int{1}
	result[1] = []int{1, 1}

	for i := 2; i <= numRows; i++ {
		result[i] = make([]int, i+1)
		result[i][0] = 1
		result[i][i] = 1
		last := numRows / 2

		for j := 1; j <= last; j++ {
			if j == last {
				result[i][j] = result[i-1][j-1] * 2
			} else {
				result[i][j] = result[i-1][j-1] + result[i-1][j]
				result[i][i-j] = result[i][j]
			}
		}
	}

	return result
}

func reverse(arr []int) []int {
	last := len(arr) / 2

	for left := 0; left <= last; left++ {
		right := len(arr) - 1 - left
		arr[left], arr[right] = arr[right], arr[left]
	}

	return arr
}
