package main

import (
	"bufio"
	"fmt"
	"io"
	"os"
	"strconv"
	"strings"
)

var (
	reader io.Reader = os.Stdin
	writer io.Writer = os.Stdout
)

func main() {
	reader = os.Stdin
	writer = os.Stdout
	run()
}

func run() {
	var results []string
	nums := readIntsFromStdin()[0]
	n, m := nums[0], nums[1]

	results = append(results, strconv.Itoa(n*m))
	results = append(results, strconv.Itoa(n*2+m*2))

	fmt.Fprintln(writer, strings.Join(results, " "))
}

// ReadInts parses lines of inputs into 2D int array.
func readIntsFromStdin() [][]int {
	out := [][]int{}
	scanner := bufio.NewScanner(reader)

	for scanner.Scan() {
		var ints []int

		for _, s := range strings.Split(scanner.Text(), " ") {
			i, err := strconv.Atoi(s)

			if err != nil {
				fmt.Fprintln(os.Stderr, "Failed to parse string into int.", err)
				os.Exit(1)
			}

			ints = append(ints, i)
		}

		out = append(out, ints)
	}

	return out
}
