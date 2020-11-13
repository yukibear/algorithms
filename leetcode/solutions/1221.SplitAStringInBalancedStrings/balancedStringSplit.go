package solution

func balancedStringSplit(s string) int {
	var (
		start  rune
		result int
		count  int
	)

	for _, r := range s {
		switch {
		case count == 0:
			result++
			count++
			start = r

		case r == start:
			count++

		default:
			count--
		}
	}

	return result
}
