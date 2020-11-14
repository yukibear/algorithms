package solution

func restoreString(s string, indices []int) string {
	r := []rune(s)
	runes := make([]rune, len(indices))
	for i, j := range indices {
		runes[j] = r[i]
	}

	return string(runes)
}
