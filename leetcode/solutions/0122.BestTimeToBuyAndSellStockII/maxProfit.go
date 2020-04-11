package solution

func maxProfit(prices []int) int {
	if prices == nil || len(prices) <= 1 {
		return 0
	}

	var profit int
	min, max := prices[0], prices[0]

	for i := 1; i < len(prices); i++ {
		if prices[i-1] < prices[i] {
			max = prices[i]
			continue
		}

		profit += max - min
		min, max = prices[i], prices[i]
	}

	return profit + max - min
}
