package solution

func findMaxLength(nums []int) int {
	var sum int
	var max int
	sumMap := make(map[int]int)

	for i, n := range nums {
		if n == 0 {
			sum--
		} else {
			sum++
		}

		if sum == 0 {
			max = i + 1
			continue
		}

		if index, ok := sumMap[sum]; !ok {
			sumMap[sum] = i
		} else if i-index > max {
			max = i - index
		}
	}

	return max
}

func maxInt(num1, num2 int) int {
	if num1 > num2 {
		return num1
	}

	return num2
}
