package solution

import "strconv"

func fizzBuzz(n int) []string {
	var result []string

	for i := 1; i <= n; i++ {
		str := strconv.Itoa(i)

		if i%3 == 0 {
			str = "Fizz"

			if i%5 == 0 {
				str += "Buzz"
			}
		} else if i%5 == 0 {
			str = "Buzz"
		}

		result = append(result, str)
	}

	return result
}
