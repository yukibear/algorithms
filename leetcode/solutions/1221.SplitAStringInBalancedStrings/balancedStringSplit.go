package solution

func balancedStringSplit(s string) int {
	var (
		count  int
		result int
	)

	for _, r := range s {
		if r == 'R' {
			count++
		} else {
			count--
		}

		if count == 0 {
			result++
		}
	}

	return result
}
