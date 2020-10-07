package solution

import "math"

func bitwiseComplement(N int) int {
	if N == 0 {
		return 1
	}

	digits := math.Floor(math.Log2(float64(N))) + 1
	return int((math.Pow(2, digits) - 1)) ^ N
}
