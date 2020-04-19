package solution

import (
	"math"
	"unicode"
)

func reformat(s string) string {
	// for characters
	arr1 := make([]rune, 0, len(s))
	// for numbers
	arr2 := make([]rune, 0, len(s))

	for _, r := range s {
		if unicode.IsNumber(r) {
			arr2 = append(arr2, r)
		} else {
			arr1 = append(arr1, r)
		}
	}

	{
		numArr1, numArr2 := len(arr1), len(arr2)

		if math.Abs(float64(numArr1-numArr2)) > 1 {
			return ""
		}

		if numArr1 < numArr2 {
			arr1, arr2 = arr2, arr1
		}
	}

	runes := make([]rune, 0, len(s))

	for i, r := range arr2 {
		runes = append(runes, arr1[i], r)
	}

	if len(arr1) > len(arr2) {
		runes = append(runes, arr1[len(arr1)-1])
	}

	return string(runes)
}
