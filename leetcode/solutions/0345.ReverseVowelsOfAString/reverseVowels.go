package solution

func reverseVowels(s string) string {
	str := []rune(s)
	vowelMap := make(map[int]rune, len(s))
	indices := make([]int, 0, len(s))

	for i, char := range str {
		if _, ok := vowels[char]; ok {
			vowelMap[i] = char
			indices = append(indices, i)
		}
	}

	end := len(indices) / 2

	for i := 0; i < end; i++ {
		index1, index2 := indices[i], indices[len(indices)-i-1]
		str[index1], str[index2] = str[index2], str[index1]
	}

	return string(str)
}

var vowels = map[rune]struct{}{
	'A': struct{}{},
	'a': struct{}{},
	'I': struct{}{},
	'i': struct{}{},
	'U': struct{}{},
	'u': struct{}{},
	'E': struct{}{},
	'e': struct{}{},
	'O': struct{}{},
	'o': struct{}{},
}
