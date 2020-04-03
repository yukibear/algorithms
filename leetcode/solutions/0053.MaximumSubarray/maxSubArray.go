package solution

func maxSubArray(nums []int) int {
	max, prevMax := nums[0], nums[0]

	for _, num := range nums[1:] {
		prevMax = maxInt(prevMax+num, num)
		max = maxInt(max, prevMax)
	}

	return max
}

func maxInt(num1, num2 int) int {
	if num1 > num2 {
		return num1
	}

	return num2
}
