package main

import (
	"fmt"
	"io"
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
	var S string
	fmt.Fscan(reader, &S)

	var a, b, c int
	for _, s := range S {
		switch s {
		case 'a':
			a++
		case 'b':
			b++
		case 'c':
			c++
		}
	}

	if a > b {
		if a > c {
			fmt.Fprintln(writer, "a")
		} else {
			fmt.Fprintln(writer, "c")
		}
	} else {
		if b > c {
			fmt.Fprintln(writer, "b")
		} else {
			fmt.Fprintln(writer, "c")
		}
	}
}
