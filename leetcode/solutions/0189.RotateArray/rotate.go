package solution

func rotate(nums []int, k int) {
	k = k % len(nums)
	i := len(nums) - k
	rem := append([]int(nil), nums[i:]...)
	copy(nums[k:], nums[:i])
	copy(nums[:k+1], rem)
}
