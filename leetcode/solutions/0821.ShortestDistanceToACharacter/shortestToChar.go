package solution

func shortestToChar(S string, C byte) []int {
	c := rune(C)
	maxInt := int(^uint(0) >> 1)
	result := []int{maxInt}

	for i, s := range S {
		if s != c {
			if result[i] == maxInt {
				result = append(result, maxInt)
			} else {
				result = append(result, result[i]+1)
			}
			continue
		}

		result = append(result, 0)

		for i := 1; i < len(result) && result[len(result)-1-i] > i; i++ {
			result[len(result)-1-i] = i
		}
	}

	return result[1:]
}


func shortestToChar1(S string, C byte) []int {
	c := rune(C)
	maxInt := int(^uint(0) >> 1)
	result := []int{maxInt}

	for i, s := range S {
		if s != c {
			if result[i] == maxInt {
				result = append(result, maxInt)
			} else {
				result = append(result, result[i]+1)
			}
			continue
		}

		result = append(result, 0)

		for i := 1; i < len(result) && result[len(result)-1-i] > i; i++ {
			result[len(result)-1-i] = i
		}
	}

	return result[1:]
}
