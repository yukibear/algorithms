package solution

func backspaceCompare(S string, T string) bool {
	si, ti := len(S), len(T)

	for {
		si, ti = doBackspace(S, si-1), doBackspace(T, ti-1)
		if si < 0 || ti < 0 || S[si] != T[ti] {
			return si == -1 && ti == -1
		}
	}
}

func doBackspace(s string, i int) int {
	for bs := 0; i >= 0; i-- {
		switch {
		case s[i] == '#':
			bs++
		case bs > 0:
			bs--
		default:
			return i
		}
	}

	return i
}
