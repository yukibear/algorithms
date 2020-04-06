package solution

func maxProfit(prices []int) int {
	if prices == nil || len(prices) == 0 {
		return 0
	}

	var maxProfit int
	minPrice := prices[0]

	for i := 1; i < len(prices); i++ {
		price := prices[i]

		if minPrice > price {
			minPrice = price
			continue
		}

		profit := price - minPrice

		if maxProfit < profit {
			maxProfit = profit
		}
	}

	return maxProfit
}
