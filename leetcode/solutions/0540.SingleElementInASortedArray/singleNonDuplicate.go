package solution

func singleNonDuplicate(nums []int) int {
	len := len(nums)

	for i := 0; i < len; i += 2 {
		if i == len-1 || nums[i] != nums[i+1] {
			return nums[i]
		}
	}

	return -1
}
