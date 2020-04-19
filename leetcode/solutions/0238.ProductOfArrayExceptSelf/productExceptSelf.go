package solution

func productExceptSelf(nums []int) []int {
	left, right := 1, 1
	res := make([]int, len(nums))
	for i := range res {
		res[i] = 1
	}

	for l := range nums {
		r := len(nums) - l - 1
		res[l] *= left
		res[r] *= right
		left, right = left*nums[l], right*nums[r]
	}

	return res
}
