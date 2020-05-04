package main

import (
	"bufio"
	"fmt"
	"io"
	"os"
	"sort"
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
	nums := readIntsFromStdin()[0]
	sort.Ints(nums)

	fmt.Fprintln(writer, intsToString(nums))
}

// intsToString converts []int into a single string
func intsToString(nums []int) string {
	strs := make([]string, len(nums))

	for i, num := range nums {
		strs[i] = strconv.Itoa(num)
	}

	return strings.Join(strs, " ")
}

// readIntsFromStdin parses lines of inputs into 2D int array.
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
