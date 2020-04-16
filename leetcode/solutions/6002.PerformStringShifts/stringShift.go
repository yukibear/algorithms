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
	case amount > 0:
		return string(r[len(r)-amount:]) + string(r[:len(r)-amount])

	case amount < 0:
		amount = -amount
		return string(r[amount:]) + string(r[:amount])

	default:
		return s
	}
}
