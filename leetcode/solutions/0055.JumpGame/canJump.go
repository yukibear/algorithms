package solution

func canJump(nums []int) bool {
	if len(nums) == 0 {
		return true
	}

	memo := make([]int, len(nums))
	memo[0] = 1

	for i, n := range nums {
		if memo[i] == 0 {
			continue
		}

		if i+n >= len(nums)-1 {
			return true
		}

		for j := 1; j <= n; j++ {
			memo[i+j] = n
		}
	}

	return false
}
