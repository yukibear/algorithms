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
