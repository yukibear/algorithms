package main

import (
	"bufio"
	"bytes"
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
	var S []byte
	var i int

	for scanner.Scan() {
		strs := strings.Split(scanner.Text(), " ")

		switch strs[0] {
		case "1":
			X, _ := strconv.Atoi(strs[2])
			S = append(S, bytes.Repeat([]byte(strs[1]), X)...)

		case "2":
			D, _ := strconv.Atoi(strs[1])
			counts := make([]int, 26)

			for j := 0; j < D && i < len(S); i, j = i+1, j+1 {
				counts[S[i]-'a']++
			}

			var sum int

			for _, count := range counts {
				sum += count * count
			}

			fmt.Fprintln(writer, sum)
		}
	}
}
