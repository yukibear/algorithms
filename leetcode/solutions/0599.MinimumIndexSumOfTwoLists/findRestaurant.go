package solution

func findRestaurant(list1 []string, list2 []string) []string {
	nameIndex := make(map[string]int, len(list1))

	for i, name := range list1 {
		nameIndex[name] = i
	}

	// init with large enough number
	minSum := len(list1) + len(list2)
	result := make([]string, 0, len(list1)+len(list2))

	for i, name := range list2 {
		if j, ok := nameIndex[name]; ok {
			if i+j < minSum {
				result = []string{name}
				minSum = i + j
			} else if i+j == minSum {
				result = append(result, name)
			}
		}
	}

	return result
}
