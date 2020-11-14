package solution

import "sort"

func smallerNumbersThanCurrent(nums []int) []int {
	indexMap := make(map[int][]int, len(nums))

	for i, num := range nums {
		if indices, ok := indexMap[num]; ok {
			indexMap[num] = append(indices, i)
		} else {
			indexMap[num] = []int{i}
		}
	}

	sort.Sort(sort.Reverse(sort.IntSlice(nums)))
	result := make([]int, len(nums))
	count := len(nums) - 1

	for i := 0; i < len(nums); {
		j := i + 1

		for j < len(nums) && nums[j] == nums[i] {
			count--
			j++
		}

		for _, index := range indexMap[nums[i]] {
			result[index] = count
		}

		i = j
		count--
	}

	return result
}
