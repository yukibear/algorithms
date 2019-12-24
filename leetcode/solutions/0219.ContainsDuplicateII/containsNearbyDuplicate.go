package solutions

func containsNearbyDuplicate(nums []int, k int) bool {
	indexMap := make(map[int]int, len(nums))

	for i, num := range nums {
		if index, found := indexMap[num]; found && i-index <= k {
			return true
		}

		indexMap[num] = i
	}

	return false
}
