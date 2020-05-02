package solution

func fourSumCount(A []int, B []int, C []int, D []int) int {
	sumCountMap := make(map[int]int)

	for _, c := range C {
		for _, d := range D {
			sumCountMap[c+d]++
		}
	}

	var count int

	for _, a := range A {
		for _, b := range B {
			count += sumCountMap[-a-b]
		}
	}

	return count
}
