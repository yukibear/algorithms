package solution

func firstBadVersion(n int) int {
	l, r := 0, n

	for l < r {
		mid := (l + r) / 2

		if isBadVersion(mid) {
			r = mid
		} else {
			l = mid + 1
		}
	}

	return l
}

// FirstBadVersion represents the first bad version that is the answer.
var FirstBadVersion int

func isBadVersion(i int) bool {
	return FirstBadVersion <= i
}
