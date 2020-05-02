package solution

import "strings"

func numJewelsInStones(J string, S string) int {
	var count int

	for _, j := range strings.Split(J, "") {
		count += strings.Count(S, j)
	}

	return count
}

// func numJewelsInStones(J string, S string) int {
// 	runeMap := make(map[rune]bool, len(J))

// 	for _, r := range J {
// 		runeMap[r] = true
// 	}

// 	var count int

// 	for _, r := range S {
// 		if runeMap[r] {
// 			count++
// 		}
// 	}

// 	return count
// }
