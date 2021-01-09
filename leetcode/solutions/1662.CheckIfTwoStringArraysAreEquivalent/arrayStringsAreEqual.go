package solution

func arrayStringsAreEqual(word1 []string, word2 []string) bool {
	var i1, i2, w1, w2 int
	str1, str2 := word1[w1], word2[w2]

	for i1 < len(str1) && i2 < len(str2) {
		if str1[i1] != str2[i2] {
			return false
		}

		i1++
		i2++

		if i1 == len(str1) && w1 != len(word1)-1 {
			w1++
			str1, i1 = word1[w1], 0
		}

		if i2 == len(str2) && w2 != len(word2)-1 {
			w2++
			str2, i2 = word2[w2], 0
		}
	}

	return i1 == len(word1[len(word1)-1]) && i2 == len(word2[len(word2)-1])
}
