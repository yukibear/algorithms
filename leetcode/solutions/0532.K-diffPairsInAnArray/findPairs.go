package solution

// Simple solution is to sort first, then check the forward pair later O(n log n) + O(n).
// This solution is O(n) using doubly solution.
func findPairs(nums []int, k int) int {
	// map[targetNumber][]bool{isUsedBehind, isUsedForward}
	pairs := make(map[int][2]bool, len(nums))
	var count int

	for _, num := range nums {
		if _, ok := pairs[num]; !ok {
			pairs[num] = [2]bool{}

			if k == 0 {
				continue
			}
		}

		if k == 0 {
			if curr := pairs[num]; !curr[0] {
				curr[0] = true
				count++
				pairs[num] = curr
			}

			continue
		}

		curr := pairs[num]

		if behind, ok := pairs[num-k]; !curr[0] && ok {
			curr[0] = true
			behind[1] = true
			pairs[num-k] = behind
			count++
		}
		if forward, ok := pairs[num+k]; !curr[1] && ok {
			curr[1] = true
			forward[0] = true
			pairs[num+k] = forward
			count++
		}

		pairs[num] = curr
	}

	return count
}
