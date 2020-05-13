package solution

func removeKdigits(num string, k int) string {
	if len(num) <= k {
		return "0"
	}

	bytes := make([]byte, 0, len(num)-k)
	end := len(num)
	restLen := len(num) - k

	for i := 0; restLen > 0; restLen-- {
		min, minIndex := num[i], i

		for ; i <= end-restLen; i++ {
			if min > num[i] {
				min = num[i]
				minIndex = i
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
