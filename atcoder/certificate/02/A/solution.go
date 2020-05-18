package main

import (
	"fmt"
	"io"
	"os"
	"strconv"
)

var (
	reader io.Reader = os.Stdin
	writer io.Writer = os.Stdout
)

func main() {
	run()
}

func run() {
	var S, T string
	fmt.Fscan(reader, &S, &T)

	var isB_1 bool
	a, err := strconv.Atoi(string(S[0]))
	if err != nil {
		a, err = strconv.Atoi(string(S[1]))
		isB_1 = true
	}

	var isB_2 bool
	b, err := strconv.Atoi(string(T[0]))
	if err != nil {
		b, err = strconv.Atoi(string(T[1]))
		isB_2 = true
	}

	var ans int
	if isB_1 == isB_2 {
		ans = a - b
		if ans < 0 {
			ans *= -1
		}
	} else {
		ans = a + b - 1
	}

	fmt.Fprintln(writer, ans)
}
