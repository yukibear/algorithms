package solution

func canJump(nums []int) bool {
	var max int

	for i, num := range nums {
		if i > max {
			return false
		}

		next := i + num

		if next > max {
			max = next
		}
	}

	return true
}
