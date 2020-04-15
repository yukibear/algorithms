package solution

func productExceptSelf(nums []int) []int {
	var zeroCount int
	productOfAll := 1

	for _, n := range nums {
		if n == 0 {
			zeroCount++
			continue
		}

		productOfAll *= n
	}

	for i, n := range nums {
		switch zeroCount {
		case 0:
			nums[i] = productOfAll / n

		case 1:
			if n == 0 {
				nums[i] = productOfAll
			} else {
				nums[i] = 0
			}

		default:
			nums[i] = 0
		}
	}

	return nums
}
