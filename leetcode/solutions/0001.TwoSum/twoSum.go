package solution

func twoSum(nums []int, target int) []int {
	numMap := make(map[int]int)

	for i, num := range nums {
		if j, ok := numMap[target-num]; ok {
			return []int{i, j}
		}

		numMap[num] = i
	}

	return nil
}
