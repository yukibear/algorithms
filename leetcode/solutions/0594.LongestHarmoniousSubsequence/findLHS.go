package solution

import (
	"math"
)

func findLHS(nums []int) int {
	valueCountMap := make(map[int]int)

	for _, num := range nums {
		valueCountMap[num]++
	}

	max := 0.0

	for i, num := range valueCountMap {
		if next, ok := valueCountMap[i+1]; ok {
			max = math.Max(max, float64(num + next))
		}
	}

	return int(max)
}
