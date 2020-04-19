package solution

func numJewelsInStones(J string, S string) int {
	runeMap := make(map[rune]bool, len(J))

	for _, r := range J {
		runeMap[r] = true
	}

	var count int

	for _, r := range S {
		if runeMap[r] {
			count++
		}
	}

	return count
}
