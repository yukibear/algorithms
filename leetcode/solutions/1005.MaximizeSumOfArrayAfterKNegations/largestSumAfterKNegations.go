package solution

import (
	"sort"
)

func largestSumAfterKNegations(A []int, K int) int {
	sum := 0
	sort.Ints(A)
	var minAbs int

	if A[0] < 0 {
		minAbs = -A[0]
	} else {
		minAbs = A[0]
	}

	for _, num := range A {
		if num <= 0 && K > 0 {
			num = -num
			K--

			if minAbs > num {
				minAbs = num
			}
		}

		sum += num
	}

	if K%2 == 1 {
		sum -= minAbs * 2
	}

	return sum
}
