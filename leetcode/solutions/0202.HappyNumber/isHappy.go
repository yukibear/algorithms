package solution

func isHappy(n int) bool {
	numMap := map[int]bool{}

	for !numMap[n] {
		// Just to break infinite loop. Never be read by below
		numMap[n] = true

		sum := 0

		for ; n > 0; n /= 10 {
			num := n % 10
			sum += num * num
		}

		n = sum
	}

	return n == 1
}
