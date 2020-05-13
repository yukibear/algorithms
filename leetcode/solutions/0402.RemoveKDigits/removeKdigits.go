package solution

func removeKdigits(num string, k int) string {
	bytes := make([]byte, 0, len(num)-k)

	for i, last := 0, k; last < len(num); last++ {
		min, minIndex := num[i], i

		for ; i <= last; i++ {
			if min > num[i] {
				min, minIndex = num[i], i
			}
		}

		if min != '0' || len(bytes) != 0 {
			bytes = append(bytes, min)
		}

		i = minIndex + 1
	}

	if len(bytes) == 0 {
		return "0"
	}

	return string(bytes)
}
