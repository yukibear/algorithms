package solution

func guessNumber(n int) int {
	for l, r := 1, n; l <= r; {
		mid := (l + r) >> 1

		switch guess(mid) {
		case -1:
			r = mid - 1
		case 1:
			l = mid + 1
		default:
			return mid
		}
	}

	return -1
}
