package solution

func maxSubArray(nums []int) int {
	max := nums[0]
	prevMax := 0

	for _, num := range nums {
		prevMax = maxInt(prevMax+num, num)
		max = maxInt(max, prevMax)
	}

	return max
}

func maxInt(num1 int, num2 int) int {
	if num1 > num2 {
		return num1
	}

	return num2
}
