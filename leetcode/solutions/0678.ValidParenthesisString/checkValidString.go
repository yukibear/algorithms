package solution

func checkValidString(s string) bool {
	openCount := make([]int, 0, len(s))
	astCount := make([]int, 0, len(s))

	for i, r := range s {
		switch {
		case r == '(':
			openCount = append(openCount, i)
		case r == '*':
			astCount = append(astCount, i)
		case len(openCount) > 0:
			openCount = openCount[:len(openCount)-1]
		case len(astCount) > 0:
			astCount = astCount[:len(astCount)-1]
		default:
			return false
		}
	}

	i := len(openCount) - 1
	for j := len(astCount) - 1; i >= 0 && j >= 0; i, j = i-1, j-1 {
		if openCount[i] > astCount[j] {
			return false
		}
	}

	return i < 0
}
