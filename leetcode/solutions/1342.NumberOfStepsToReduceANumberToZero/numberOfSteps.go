package solution

func numberOfSteps(num int) int {
	if num == 0 {
		return 0
	}

	var count int

	for ; num > 0; num, count = num>>1, count+1 {
		if num%2 == 1 {
			count++
		}
	}

	return count - 1
}
