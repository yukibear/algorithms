package solution

func firstUniqChar(s string) int {
	a := 'a'
	firstCharIndices := make([]int, 26)
	distincts := make([]bool, len(s))

	for i, r := range s {
		j := r - a
		firstIndex := firstCharIndices[j]

		if firstIndex != 0 {
			distincts[firstIndex-1] = false
		} else {
			firstCharIndices[j] = i + 1
			distincts[i] = true
		}
	}

	for i, isDistinct := range distincts {
		if isDistinct {
			return i
		}
	}

	return -1
}
