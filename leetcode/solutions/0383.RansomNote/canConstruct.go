package solution

func canConstruct(ransomNote string, magazine string) bool {
	if len(ransomNote) > len(magazine) {
		return false
	}

	letterCount := make([]int, 26)
	base := int32('a')

	for _, r := range magazine {
		letterCount[r-base]++
	}

	for _, r := range ransomNote {
		letterCount[r-base]--

		if letterCount[r-base] < 0 {
			return false
		}
	}

	return true
}
