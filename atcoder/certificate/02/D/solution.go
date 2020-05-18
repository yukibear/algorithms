package main

import (
	"fmt"
	"io"
	"math"
	"os"
)

var (
	reader io.Reader = os.Stdin
	writer io.Writer = os.Stdout
)

func main() {
	run()
}

func run() {
	var str string
	fmt.Fscan(reader, &str)
	// strs := strings.Split(str, "")
	// a, b, c := str[0], str[1], str[2]

	var count int

	for i := 1; i <= 3; i++ {
		if len(str)%i > 0 {
			continue
		}

		// マッチ候補を絞る
		targets := make([]int, i)
		for j := 0; j < len(targets); j++ {
			targets[j] = j
		}

		for j := i; j < len(str); j += i {
			for index, t := range targets {
				if str[j+t] != str[j+t-i] {
					targets = append(targets[:index], targets[index+1:]...)
				}
			}

			if len(targets) == 0 {
				break
			}
		}

		count += int(math.Pow(2, float64(len(targets))))
	}

	fmt.Fprintln(writer, count)
}

// func createPermutations(perm [][]bool, i int) {
// 	if len(perm[0]) == i {
// 		return
// 	}

// 	for ; i > 0; i-- {
// 		perm[i] = append(perm[i], true)
// 		perm[i] = append(perm[i], false)
// 	}

// 	perm = append(perm, make([]bool, len(perm[0])))

// 	createPermutations(perm, i)
// }

// func match(S []string, T []string) {
// 	if len(S)%len(T) > 0 {
// 		return false
// 	}

// 	for i := 0; i < len(S); i += len(T) {
// 		for j, test := range T {
// 			if test != "." && S[i+j] != test {
// 				return false
// 			}
// 		}
// 	}

// 	return true
// }

// if i == 1 {
// 	allIsSame := true

// 	for j := 1; j < len(strs); j++ {
// 		if strs[j] != strs[j-1] {
// 			allIsSame = false

// 			break
// 		}
// 	}

// 	if allIsSame {
// 		count += 2
// 	} else {
// 		count++
// 	}

// 	continue
// }
