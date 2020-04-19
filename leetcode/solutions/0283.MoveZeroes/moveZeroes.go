package solution

func moveZeroes(nums []int) {
	var i, loopCount int

	for ; loopCount < len(nums); loopCount++ {
		if nums[i] == 0 {
			copy(nums[i:], nums[i+1:])
		} else {
			i++
		}
	}

	zeroCount := loopCount - i
	copy(nums[len(nums)-zeroCount:], make([]int, zeroCount))
}
