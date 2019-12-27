package solution

func minCostClimbingStairs(cost []int) int {
	if len(cost) <= 1 {
		return 0
	}

	dp := [...]int{cost[0], cost[1]}

	for i := 2; i < len(cost); i++ {
		dp[0], dp[1] = dp[1], min(dp[0], dp[1])+cost[i]
	}

	return min(dp[0], dp[1])
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
