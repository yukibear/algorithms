package solution

func rob(nums []int) int {
	dp := [2]int{}

	for _, num := range nums {
		dp[0], dp[1] = dp[1], max(dp[1], dp[0]+num)
	}

	return max(dp[0], dp[1])
}

func max(a, b int) int {
	if a > b {
		return a
	}

	return b
}
