package solution

import (
	"math"
)

func subtractProductAndSum(n int) int {
	if n < 10 {
		return 0
	}

	var sum int
	product := 1
	numOfDigits := int(math.Floor(math.Log10(float64(n)))) + 1

	for i := 0; i < numOfDigits; i, n = i+1, n/10 {
		rest := n % 10
		product *= rest
		sum += rest
	}

	return product - sum
}
