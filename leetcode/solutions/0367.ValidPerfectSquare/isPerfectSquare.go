package solution

func isPerfectSquare(num int) bool {
	l, r := 0, num

	for l <= r {
		mid := (l + r) >> 1

		square := mid * mid

		switch {
		case square == num:
			return true
		case square < num:
			l = mid + 1
		default:
			r = mid - 1
		}
	}

	return false
}
