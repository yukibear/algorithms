package solution

import (
	"unicode"
)

func letterCasePermutation(S string) []string {
	return dfs([]rune(S), 0, []string{})
}

func dfs(chars []rune, start int, permutation []string) []string {
	// movie "start" pointer to the next non-numeric letter
	for ; start < len(chars); start++ {
		if unicode.IsLetter(chars[start]) {
			break
		}
	}

	if start == len(chars) {
		return append(permutation, string(chars))
	}

	permutation = dfs(chars, start+1, permutation)
	chars[start] = toggleCase(chars[start])

	return dfs(chars, start+1, permutation)
}

func toggleCase(char rune) rune {
	if unicode.IsLower(char) {
		return unicode.ToUpper(char)
	} else if unicode.IsUpper(char) {
		return unicode.ToLower(char)
	}

	return char
}
