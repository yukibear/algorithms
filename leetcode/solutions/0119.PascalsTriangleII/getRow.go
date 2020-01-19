package solution

func getRow(rowIndex int) []int {
	if rowIndex == 0 {
		return []int{1}
	}
	if rowIndex == 1 {
		return []int{1, 1}
	}

	lastRow := make([]int, 0, rowIndex/2+1)
	lastRow = []int{1, 1}
	nextRow := make([]int, 0, rowIndex/2+1)

	for i := 2; i <= rowIndex; i++ {
		last := i/2 + 1
		nextRow = []int{1}

		for j := 1; j <= last; j++ {
			if lastRow[j] != 0 {
				nextRow = append(nextRow, lastRow[j-1]+lastRow[j])
			} else {
				nextRow = append(nextRow, lastRow[j-1]*2)
			}
		}

		lastRow = nextRow
	}

	mirror := make([]int, len(lastRow))
	copy(lastRow, mirror)
	reverse(mirror)

	if rowIndex%2 == 1 {
		return append(lastRow, mirror...)
	} else {
		return append(lastRow[:len(lastRow)-1], mirror...)
	}
}

func reverse(arr []int) {
	last := len(arr) / 2

	for i := 0; i <= last; i++ {
		opposite := len(arr) - i - 1

		arr[i], arr[opposite] = arr[opposite], arr[i]
	}
}
