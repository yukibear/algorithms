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

// func findMaxLength1(nums []int) int {
// 	nums2 := make([]int, len(nums))
// 	copy(nums2, nums[1:])
// 	// fmt.Println("#1", nums, nums2)
// 	nums2[len(nums2)-1] = nums[len(nums)-1]

// 	fmt.Println("#2", nums, nums2)
// 	var count int
// 	var maxCount int

// 	for i := len(nums) - 1; i >= 0; i-- {
// 		fmt.Println("#3", nums[i], nums2[i])
// 		if nums[i] != nums2[i] {
// 			count++
// 		} else if count > 0 {
// 			maxCount = max(maxCount, count)
// 			count = 0
// 		}
// 		fmt.Println(count, maxCount)
// 	}

// 	if count > 0 {
// 		maxCount = max(maxCount, count)
// 	}

// 	return maxCount + maxCount%2
// }

func maxInt(num1, num2 int) int {
	if num1 > num2 {
		return num1
	}

	return num2
}
