package solution

import "sort"

func numRescueBoats(people []int, limit int) int {
	sort.Slice(people, func(i, j int) bool {
		return people[i] > people[j]
	})
	var boats int
	l, r := 0, len(people)-1

	for l < len(people) && l < r {
		boats++

		if people[l]+people[r] <= limit {
			r--
		}

		l++
	}

	if l == r {
		return boats + 1
	}

	return boats
}
