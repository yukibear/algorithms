package solution

func reverseVowels(s string) string {
	str := []rune(s)
	left, right := 0, len(str)-1

	for ; left < right; left, right = left+1, right-1 {
		for ; left < right && !vowels[str[left]]; left++ {
		}
		for ; left < right && !vowels[str[right]]; right-- {
		}

		str[left], str[right] = str[right], str[left]
	}

	return string(str)
}

var vowels = map[rune]bool{
	'A': true,
	'a': true,
	'I': true,
	'i': true,
	'U': true,
	'u': true,
	'E': true,
	'e': true,
	'O': true,
	'o': true,
}
