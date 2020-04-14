package solution

func stringShift(s string, shift [][]int) string {
	var amount int

	for _, row := range shift {
		if row[0] == 0 {
			amount -= row[1]
		} else {
			amount += row[1]
		}
	}

	r := []rune(s)
	amount %= len(r)

	switch {
	case amount == 0:
		return s

	case amount > 0:
		r2 := make([]rune, len(r))
		copy(r2, r[len(r)-amount:])
		copy(r2[amount:], r[:len(r)-amount])
		return string(r2)

	case amount < 0:
		amount = -amount
		r2 := make([]rune, len(r))
		copy(r2, r[amount:])
		copy(r2[len(r)-amount:], r[:amount])
		return string(r2)
	}

	return ""
}
