package solution

import "strings"

func numJewelsInStones(J string, S string) int {
	var count int

	for _, j := range strings.Split(J, "") {
		count += strings.Count(S, j)
	}

	return count
}
