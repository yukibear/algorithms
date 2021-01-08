package solution

func lengthOfLongestSubstring(s string) int {
	var max, i int
	memo := make(map[byte]int)

	for j := 0; j < len(s); j++ {
		b := s[j]

		if prev, ok := memo[b]; ok && prev >= i {
			max = maxInt(max, j-i)
			i = prev + 1
		}

		memo[b] = j
	}

	return maxInt(max, len(s)-i)
}

func maxInt(a, b int) int {
	if a > b {
		return a
	}

	return b
}
