package solution

func groupAnagrams(strs []string) [][]string {
	const first = 'a'
	tmp := make(map[[26]int][]string)

	for _, str := range strs {
		key := [26]int{}

		for _, r := range str {
			key[r-first]++
		}

		tmp[key] = append(tmp[key], str)
	}

	result := [][]string{}

	for _, strs := range tmp {
		result = append(result, strs)
	}

	return result
}
