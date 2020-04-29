package solution

func leftMostColumnWithOne(binaryMatrix BinaryMatrix) int {
	dims := binaryMatrix.Dimensions()
	candidates := make([]int, dims[0])

	for i := range candidates {
		candidates[i] = i
	}

	l, r := 0, dims[1]-1

	for l <= r {
		mid := (l + r) >> 1
		nextCandidates := make([]int, 0, len(candidates))

		for _, n := range candidates {
			println(l, r, n, mid)
			if binaryMatrix.Get(n, mid) == 1 {
				nextCandidates = append(nextCandidates, n)
			}
		}

		if len(nextCandidates) > 0 {
			candidates = nextCandidates
			r = mid - 1
		} else {
			l = mid + 1
		}
	}

	if l == dims[1] {
		return -1
	}

	return l
}
