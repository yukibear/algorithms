package solution

import (
	"sort"
)

type sortRunes []rune

func (s sortRunes) Less(i, j int) bool {
	return s[i] < s[j]
}

func (s sortRunes) Len() int {
	return len(s)
}

func (s sortRunes) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}

func groupAnagrams(strs []string) [][]string {
	strMap := make(map[string][]string)

	for _, str := range strs {
		s := []rune(str)
		sort.Sort(sortRunes(s))
		key := string(s)
		strMap[key] = append(strMap[key], str)
	}

	var result [][]string

	for _, strs := range strMap {
		result = append(result, strs)
	}

	return result
}
