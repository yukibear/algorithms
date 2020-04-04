package solution

func tribonacci(n int) int {
	dp := [3]int{0, 1, 1}

	if (n < 3) {
		return dp[n];
	}

	for i := 3; i <= n; i++ {
		dp[0], dp[1], dp[2] = dp[1], dp[2], dp[0] + dp[1] + dp[2]
	}

	return dp[2]
}
