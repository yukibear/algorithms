package main

import (
	"fmt"
	"os"

	"github.com/yukisato/algoutil/atcoder"
)

func main() {
	rw := &atcoder.IoReadWriter{
		Reader: os.Stdin,
		Writer: os.Stdout,
	}

	run(rw)
}

func run(rw *atcoder.IoReadWriter) {
	fmt.Fprintln(rw.Writer, "Hello World")
}
