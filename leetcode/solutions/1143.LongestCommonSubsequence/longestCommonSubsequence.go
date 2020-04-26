package solution

func longestCommonSubsequence(text1 string, text2 string) int {
	dp := make([][]int, len(text1)+1)

	numRow := len(text2) + 1
	dp[0] = make([]int, numRow)

	for i := 1; i <= len(text1); i++ {
		r1 := text1[i-1]
		dp[i] = make([]int, numRow)

		for j := 1; j <= len(text2); j++ {
			r2 := text2[j-1]

			if r1 == r2 {
				dp[i][j] = max(dp[i][j-1], dp[i-1][j-1]+1)
			} else {
				dp[i][j] = max(dp[i-1][j], dp[i][j-1])
			}
		}
	}

	return dp[len(text1)][len(text2)]
}

func max(a, b int) int {
	if a > b {
		return a
	}

	return b
}
