package solution

func singleNumber(nums []int) int {
	numMap := make(map[int]bool)

	for _, num := range nums {
		if numMap[num] {
			numMap[num] = false
			continue
		}

		numMap[num] = true
	}

	for num, flag := range numMap {
		if flag == true {

			return num
		}

	}

	return -1
}
