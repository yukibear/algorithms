package solution

func repeatedNTimes(A []int) int {
	set := make(map[int]bool)

	for _, n := range A {
		if set[n] {
			return n
		}

		set[n] = true
	}

	return -1
}
