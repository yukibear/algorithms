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
	numArr := readIntsFromStdin()
	results := make([]string, 0, len(numArr))

	for _, nums := range numArr {
		if nums[0] == 0 && nums[1] == 0 {
			break
		}

		if nums[0] > nums[1] {
			nums[0], nums[1] = nums[1], nums[0]
		}

		results = append(results, strconv.Itoa(nums[0])+" "+strconv.Itoa(nums[1]))
	}

	fmt.Fprintln(writer, strings.Join(results, "\n"))
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
