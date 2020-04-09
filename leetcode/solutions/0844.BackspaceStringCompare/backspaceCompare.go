package solution

func backspaceCompare(S string, T string) bool {
	return interpritBs(S) == interpritBs(T)
}

func interpritBs(str string) string {
	res := []rune{}

	for _, s := range str {
		if s != '#' {
			res = append(res, s)
			continue
		}
		if len(res) > 0 {
			res = res[:len(res)-1]
		}
	}

	return string(res)
}
