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
	var result string
	hello := "Hello World\n"

	for i := 0; i < 1000; i++ {
		result += hello
	}

	fmt.Fprint(writer, result)
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
