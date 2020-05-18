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
	run()
}

func run() {
	scanner := bufio.NewScanner(reader)
	scanner.Scan()
	N, _ := strconv.Atoi(scanner.Text())
	in := make([][]string, 0, N)

	for scanner.Scan() {
		in = append(in, strings.Split(scanner.Text(), ""))
	}

	for i := N - 2; i >= 0; i-- {
		for j := 1; j <= len(in[i])-2; j++ {
			if in[i][j] == "#" && (in[i+1][j-1] == "X" || in[i+1][j] == "X" || in[i+1][j+1] == "X") {
				in[i][j] = "X"
			}
		}
	}

	for _, strs := range in {
		fmt.Fprintln(writer, strings.Join(strs, ""))
	}
}
