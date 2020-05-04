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
	fmt.Println("called")
	nums := rw.ReadInts()[0]

	if nums[0]&nums[1]&1 == 1 {
		fmt.Fprintln(rw.Writer, "Odd")
	} else {
		fmt.Fprintln(rw.Writer, "Even")
	}
}
