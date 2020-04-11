package solution

func countElements(arr []int) int {
	var result int
	intMap := make(map[int]int)

	for _, num := range arr {
		intMap[num]++
	}

	for num := range intMap {
		result += intMap[num-1]
	}

	return result
}
